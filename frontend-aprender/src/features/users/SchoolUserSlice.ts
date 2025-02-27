import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SchoolUser, schoolUserAuth } from '#models/usuarios.ts';

const initialState: schoolUserAuth = {
    schoolAccessToken: '',
    isAuthenticated: false,
};

export const schoolUserSlice = createSlice({
    name: 'schoolUsers',
    initialState,
    reducers: {
        loginSchoolUser: (state, action: PayloadAction<SchoolUser>) => {
            return { ...state, ...action.payload };
        },
        logoutSchoolUser: () => {
            initialState;
        },
    }
});

export const { loginSchoolUser, logoutSchoolUser } = schoolUserSlice.actions;

export default schoolUserSlice.reducer;