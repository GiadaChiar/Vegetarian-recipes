// creation global store

// all the slice in the database

import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./recipeSlice";




export const apiKey = "c211551bde704b19b5cec9962d296bc5";

export const store = configureStore({
    reducer: {
        recipe: recipeReducer,
    },
});