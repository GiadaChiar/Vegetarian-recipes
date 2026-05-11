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

//default id carts
const DefaultCode = ["647563", "658914", "1096185", "63310", "661740"];




export default function RecipePage() {

    const { id } = useParams();

    const dispatch = useDispatch();

    // fallback empty array 
    const recipes = useSelector(
        (state: any) => state.recipe.recipes
    ) || [];

    const [loading, setLoading] = useState(false);

    //find right recipe
    const recipe = recipes.find(
        (item: any) => item.id === Number(id)
    );

    useEffect(() => {

        // if already exist return
        if (recipe) return;

        // else check id, if you don't have do the fetch 
        const isDefault = DefaultCode.includes(String(id));

        if (!isDefault) return;

        const fetchRecipe = async () => {

            try {

                setLoading(true);

                const response = await axios.get(
                    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
                );

                // get info
                const result = response.data;

                // add in the store 
                dispatch(
                    setRecipe([...recipes, result])
                );

            } catch (error) {

                console.log(error);

            } finally {

                setLoading(false);

            }
        };

        fetchRecipe();

    }, [id, recipe]);

    if (loading) {
        return <p>Loading...</p>;
    }

    // upload recipe 
    const updatedRecipe = recipes.find(
        (item: any) => item.id === Number(id)
    );

    if (!updatedRecipe) {
        return <p>RICETTA NON TROVATA</p>;
    }

    return (
        <>
            <FirstBigBlock recipe={updatedRecipe} />
            <SecondBigBlock recipe={updatedRecipe} />
        </>
    );
}
