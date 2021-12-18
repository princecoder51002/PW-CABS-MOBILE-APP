import { configureStore } from "@reduxjs/toolkit";
import navReducer from './slices/navSlice'; // here navReducer refers to the traveling part of the app like how navigating or travelling is done 

export const store = configureStore({
    reducer: {
        nav: navReducer,
    },
});