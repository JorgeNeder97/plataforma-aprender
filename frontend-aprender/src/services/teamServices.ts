import axios from '#services/axios.ts';
import { TeamUser } from '#models/usuarios.ts';
import { SchoolUser } from '#models/usuarios.ts';


export const teamLoginRequest = async (data: TeamUser) => {
    return await axios.post('/user/teamLogin', data, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

export const schoolLoginRequest = async (data: SchoolUser) => {
    return await axios.post('/user/schoolLogin', data, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

