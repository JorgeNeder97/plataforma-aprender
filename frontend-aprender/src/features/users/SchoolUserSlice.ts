import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SchoolUser, userAuth } from '#models/usuarios.ts';

const initialState: userAuth = {
    userName: '',
    type: '',
    isAuthenticated: false,
};

export const schoolUserSlice = createSlice({
    name: 'schoolUsers',
    initialState,
    reducers: {
        loginSchoolUser: (state, action: PayloadAction<SchoolUser>) => {
            
        },
        logoutSchoolUser: () => {
            initialState;
        },
    }
});

export const { loginSchoolUser, logoutSchoolUser } = schoolUserSlice.actions;

export default schoolUserSlice.reducer;