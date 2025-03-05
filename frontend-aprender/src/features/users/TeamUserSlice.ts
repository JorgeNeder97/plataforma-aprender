import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TeamUser, teamUserAuth } from '#models/usuarios.ts';


const initialState: teamUserAuth = {
    teamAccessToken: '',
    teamRefreshToken: '',
    userId: '',
    userName: '',
    isAuthenticated: false,
}

export const teamUserSlice = createSlice({
    name: 'teamUsers',
    initialState,
    reducers: {
        loginTeamUser: (state, action: PayloadAction<TeamUser>) => {
            return { ...state, ...action.payload};
        },
        refreshTeamToken: (state, action: PayloadAction<teamUserAuth>) => {
            return { ...state, ...action.payload};
        },
        logoutTeamUser: (state) => {
            state.teamAccessToken = '',
            state.teamRefreshToken = '',
            state.userId = '',
            state.userName = '',
            state.isAuthenticated = false
        },
    }
});

export const { loginTeamUser, refreshTeamToken, logoutTeamUser } = teamUserSlice.actions;

export default teamUserSlice.reducer;