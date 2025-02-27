import axios from 'axios';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { loginTeamUser, logoutTeamUser } from '#features/users/TeamUserSlice.ts';
import { loginSchoolUser, logoutSchoolUser } from '#features/users/SchoolUserSlice.ts';
import { useNavigate } from 'react-router-dom';

const baseURL = 'http://localhost:3000';

const instance = axios.create({
    baseURL: baseURL,
    withCredentials: true,
    headers: {
        'Content-Type': 'multipart/form-data',
    }
});

// Variable to avoid multiple retries
let isRefreshing = false;


// Custom hook to get the instance with navigation
export const useInstance = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const accessToken = useAppSelector(state => state.teamUsers.teamAccessToken);

    // Interceptor to add the token in every request
    instance.interceptors.request.use((config) => {
        if(accessToken) {
            config.headers["Authorization"] = `Bearer ${accessToken}`;
        }

        return config;
    });


    instance.interceptors.response.use(
        (response) => response,
        async (error) => {
            const originalRequest = error.config;

            if(error.response?.status === 401 && !isRefreshing) {
                isRefreshing = true;

                try {

                    const response = await axios.get(
                        "http://localhost:3000/user/teamRefresh", { withCredentials: true }
                    );

                    dispatch(loginTeamUser(response.data));

                    originalRequest.headers["Authorization"] = `Bearer ${response.data.teamAccessToken}`;

                    isRefreshing = false;

                    return instance(originalRequest);
                } catch (refreshError) {
                    isRefreshing = false;
                    console.error("Error al refrescar el token, redirigiendo al login.");
                    dispatch(logoutTeamUser());
                    navigate("/user/teamLogin");
                    return Promise.reject(refreshError);
                }
            }
            
            return Promise.reject(error);
        }
    );

    return instance;
}


export default instance;