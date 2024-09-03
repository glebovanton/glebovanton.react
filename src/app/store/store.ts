import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './reducer';

const store = configureStore({
    reducer: themeReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;
