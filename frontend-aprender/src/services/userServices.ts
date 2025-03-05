import axios from '#services/axios.ts';
import { axiosJWT } from '#services/axios.ts';
import { TeamUser } from '#models/usuarios.ts';
import { SchoolUser } from '#models/usuarios.ts';
import { store } from '#store';


export const teamLoginRequest = async (data: TeamUser) => {
    const response = await axios.post('/user/teamLogin', data, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return response.data;
};

export const teamRefreshTokenRequest = async (teamRefreshToken: {}) => {
    const response = await axios.post('/user/teamRefresh', teamRefreshToken, {
        headers: {
            // This one is very necessary...
            "Content-Type": "application/json",
        },
    });
    return response.data;
};


export const schoolLoginRequest = async (data: SchoolUser) => {
    const response = await axios.post('/user/schoolLogin', data, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    // This will save the accessToken in localStorage.
    localStorage.setItem("schoolAccessToken", response.data.schoolAccessToken);

    return response.data;
};

export const schoolRefreshToken = async () => {
    const response = await axios.get('/user/schoolRefresh');

    // This will save the accessToken in localStorage
    localStorage.setItem("schoolAccessToken", response.data.schoolAccessToken);

    return response.data;
};

// Esta request es de prueba para probar el funcionamiento de los tokens.

export const obEsc = async () => {
    const token = store.getState().teamUsers.teamAccessToken;
    const res = await axiosJWT.get('/admin/obtenerEscuelas', {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });

    return res.data;
}