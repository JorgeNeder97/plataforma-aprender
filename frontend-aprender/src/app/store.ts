import { configureStore } from '@reduxjs/toolkit';
import teamUserReducer from '#features/users/TeamUserSlice.ts';
import schoolUserReducer from '#features/users/SchoolUserSlice.ts';

export const store = configureStore({
    reducer: {
        teamUsers: teamUserReducer,
        schoolUsers: schoolUserReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;