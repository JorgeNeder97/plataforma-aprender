import axios from 'axios';
import { store } from '#store';
import { teamRefreshTokenRequest } from './userServices';
import { jwtDecode } from 'jwt-decode';
import { refreshTeamToken } from '#features/users/TeamUserSlice.ts';
import { teamUserAuth } from '#models/usuarios.ts';

const baseURL = 'http://localhost:3000';

const instance = axios.create({
    baseURL: baseURL,
    withCredentials: true,
    headers: {
        'Content-Type': 'multipart/form-data',
    },
});

export const axiosJWT = axios.create({
    baseURL: baseURL,
    withCredentials: true,
    headers: {
        'Content-Type': 'multipart/form-data',
    },
});

// This makes automatic the refresh of the tokens. For protected routes we must use axiosJWT.
axiosJWT.interceptors.request.use(

    async (config) => {
    
        // get the user from redux in a variable
        const user: teamUserAuth = store.getState().teamUsers;
        
        // get the tokens from redux
        const { teamRefreshToken, teamAccessToken } = store.getState().teamUsers;

        // if user doesn't exist reject the promise
        if (!user) {
            return Promise.reject('No access token found.');
        }

        // create a new Date to compare with the expiration time of the accessToken
        let currentDate = new Date();

        // decode the accessToken to get the expiration time of it.
        const decodedToken = jwtDecode(teamAccessToken);

        // if the expiration time is less than the current time means the accessToken has been expired.
        if(decodedToken.exp && decodedToken.exp * 1000 < currentDate.getTime()){

            // send a post http request to refresh the tokens (it's important to send the token inside an object).
            const response = await teamRefreshTokenRequest({ teamRefreshToken });

            // set the authorization header with the accessToken
            config.headers["Authorization"] = `Bearer ${response.teamAccessToken}`;

            // Update redux state with new access & refresh tokens
            store.dispatch(refreshTeamToken({
                userId: user.userId,
                userName: user.userName,
                teamAccessToken: response.teamAccessToken,
                teamRefreshToken: response.teamRefreshToken,
                isAuthenticated: true,
            }));
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default instance;