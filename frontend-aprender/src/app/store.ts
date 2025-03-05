import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // To use localStorage
import teamUserReducer from '#features/users/TeamUserSlice.ts';
import schoolUserReducer from '#features/users/SchoolUserSlice.ts';

// Persistence config
const persistConfig = {
    key: 'root',
    storage,
    whiteList: ["teamUsers", "schoolUsers"], // These are the reducers we wanna persist
};


const rootReducer = combineReducers({
    teamUsers: teamUserReducer,
    schoolUsers: schoolUserReducer,
});


const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false,  // This is necessary for redux-persist
        }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;