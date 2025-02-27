import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TeamUser, teamUserAuth } from '#models/usuarios.ts';

const storedToken = localStorage.getItem("teamAccessToken");
const storedAuth = localStorage.getItem("isAuthenticated") === "true";

const initialState: teamUserAuth = {
    teamAccessToken: storedToken || '',
    isAuthenticated: storedAuth || false,
}

export const teamUserSlice = createSlice({
    name: 'teamUsers',
    initialState,
    reducers: {
        loginTeamUser: (state, action: PayloadAction<TeamUser>) => {
            return { ...state, ...action.payload};
        },
        logoutTeamUser: () => {
            initialState;
        },
    }
});

export const { loginTeamUser, logoutTeamUser } = teamUserSlice.actions;

export default teamUserSlice.reducer;