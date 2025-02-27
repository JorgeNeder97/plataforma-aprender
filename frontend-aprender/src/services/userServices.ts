import axios from '#services/axios.ts';
import { TeamUser } from '#models/usuarios.ts';
import { SchoolUser } from '#models/usuarios.ts';


export const teamLoginRequest = async (data: TeamUser) => {
    const response = await axios.post('/user/teamLogin', data, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    // This will save the accessToken in localStorage.
    localStorage.setItem("teamAccessToken", response.data.teamAccessToken);

    return response.data;
};

export const teamRefreshToken = async () => {
    const response = await axios.get('/teamRefresh');

    // This will save the accessToken in localStorage
    localStorage.setItem("teamAccessToken", response.data.teamAccessToken);

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
    const response = await axios.get('/schoolRefresh');

    // This will save the accessToken in localStorage
    localStorage.setItem("schoolAccessToken", response.data.schoolAccessToken);

    return response.data;
};

// IMPORTANTE - IMPORTANTE - IMPORTANTE - IMPORTANTE - IMPORTANTE - IMPORTANTE - IMPORTANTE - IMPORTANTE

// Cada vez que se haga una petición a una ruta protegida se debe incluir el accessToken en los headers:
// const teamToken = localStorage.getItem("teamAccessToken");

// const response = await axios.get('/escuelas', {
//     headers: { Authorization: `Bearer ${teamToken}` },
// });


// o en el caso de un usuario de escuela:
// const schoolToken = localStorage.getItem("schoolAccessToken");

// const response = await axios.get('/cabecera', {
//     headers: { Authorization: `Bearer ${schoolToken}` },
// });

// en tu cuenta de chatgpt una busqueda que diga "Mantenimiento de sesion ..."