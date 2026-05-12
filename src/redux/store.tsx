// creation global store

import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./recipeSlice";

export const apiKey = "4c71800dbeb043728372da2712bf0c8f";

export const store = configureStore({
    reducer: {
        recipe: recipeReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;