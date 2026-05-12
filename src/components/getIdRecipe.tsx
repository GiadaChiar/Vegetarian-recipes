//get recipe by id (code), from redux

//get id
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FirstBigBlock } from "./FirstPartRecipe";
import SecondBigBlock from "../components/SecondPartRecipe"
import { useEffect, useState } from "react";
import axios from "axios";
import { apiKey } from "../redux/store";
import { setRecipe } from "../redux/recipeSlice";
import PopUp from "./popUp";
import type { RootState, AppDispatch } from "../redux/store";
import type { Recipe } from "../redux/recipeSlice";
import temporaryState from "../components/functionState";


// id / code of the default carts
const DefaultCode = [647563, 658914, 1096185, 63310, 661740];



export default function RecipePage() {

    const { id } = useParams();

    const dispatch = useDispatch<AppDispatch>();

    //get stored recipes
    const recipes = useSelector(
        (state: RootState) => state.recipe.recipes
    );

    //check state api
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    //find right recipe
    const recipe = recipes.find(
        (item) => item.id === Number(id),
    );

    useEffect(() => {

        // if already exist return
        if (recipe) return;

        // else check id, if you don't have do the fetch 
        const isDefault = DefaultCode.includes(Number(id));

        if (!isDefault) return;

        const fetchRecipe = async () => {

            try {

                setLoading(true);
                setError("");

                const response = await axios.get(
                    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
                );

                // get info
                const result: Recipe = response.data;
                // add in the store 
                dispatch(
                    setRecipe([...recipes, result])
                );

            } catch{
                //popup error
                temporaryState<string>(setError,"Search failed, try again", "");
            } finally {
                //stop popUp loading
                setLoading(false);
            }
        };
        fetchRecipe();

    }, [id, recipe, dispatch, recipes]);

    // upload recipe 
    const updatedRecipe = recipes.find(
        (item: Recipe) => item.id === Number(id)
    );

    if (loading) {
        return <PopUp alert="Loading..." message="" />;
    }

    if (error) {
        return <PopUp alert="Error" message={error} />;
    }

    if (!updatedRecipe) {
        return <p>RECIPE NOT FOUND</p>;
    }

    return (
        <>
            <FirstBigBlock recipe={updatedRecipe} />
            <SecondBigBlock recipe={updatedRecipe} />
        </>
    );
}