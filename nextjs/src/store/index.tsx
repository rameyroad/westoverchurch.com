import { configureStore } from '@reduxjs/toolkit';
import navReducer from './Navigation/NavSlice';
import userReducer from './User/UserSlice';

export const store = configureStore({
    reducer: {
        navigation: navReducer,
        user: userReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
