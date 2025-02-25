import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TeamUser, userAuth } from '#models/usuarios.ts';

const initialState: userAuth = {
    userName: '',
    type: '',
    isAuthenticated: false,
}

export const teamUserSlice = createSlice({
    name: 'teamUsers',
    initialState,
    reducers: {
        loginTeamUser: (state, action: PayloadAction<TeamUser>) => {
            return {...state, ...action.payload};
        },
        logoutTeamUser: () => {
            initialState;
        },
    }
});

export const { loginTeamUser, logoutTeamUser } = teamUserSlice.actions;

export default teamUserSlice.reducer;