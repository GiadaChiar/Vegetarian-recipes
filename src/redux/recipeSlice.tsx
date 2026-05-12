import { createSlice } from "@reduxjs/toolkit";


export type Ingredient = {
    id: number;
    original: string;
};

export type InstructionStep = {
    number: number;
    step: string;
};

export type Recipe = {
    id: number;
    title: string;
    image: string;
    readyInMinutes: number;
    healthScore: number;

    cuisines: string[];
    servings: number;

    extendedIngredients: Ingredient[];

    analyzedInstructions: {
        steps: InstructionStep[];
    }[];
};

export type RecipeState = {
    recipes: Recipe[];
};

const initialState: RecipeState = {
    recipes: [],
};




const recipeSlice = createSlice({
    name: "recipe",
    initialState,
    // change state
    reducers: {
        setRecipe: (state, action) => {
        state.recipes = action.payload;
        },
    },
});

export const { setRecipe } = recipeSlice.actions;

export default recipeSlice.reducer;