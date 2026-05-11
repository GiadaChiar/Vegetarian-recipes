//component group defaul serach on Search page in base of recipe's name

import Label from "../components/label";
import Input from "../components/input";
import Button from "./button";
import { useState } from "react";
import { apiKey } from "../redux/store";
import axios from "axios";
import  PopUp  from "./popUp"

//save sesults into redux
import { useDispatch } from "react-redux";
import { setRecipe } from "../redux/recipeSlice";
import temporaryState  from "../components/functionState";


//serch for recipe's name
export default function SearchBar() {

    const [getInput, setInput] = useState("");

    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [empty, setEmpty] = useState(false);


        const handleSendFirstBtn = async () => {
            if (getInput === "") return

        try {
        
            setLoading(true);
            setError("");

        
            console.log("INPUT Nome : ", getInput)
            const res = await axios.get(
                `https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian&query=${getInput}&addRecipeInformation=true&instructionsRequired=true&fillIngredients=true&nutrition=true&number=5&apiKey=${apiKey}`,
            );

            
            console.log(res)
            const results = res.data.results
            console.log(results)

            //if it is empty []
            if (results.length === 0) {
                temporaryState (setEmpty,true, false);
                return;
            }

            dispatch(setRecipe(results));

        }catch {
            temporaryState(setError,"Search failed, try again", "");

        } finally {
            setLoading(false);
        }
};
            
    
    return (
        <>
            {loading && (
            <PopUp
                alert="Loading..."
                message=""
            />
            )}
            
            {error && (
            <PopUp
                alert="Error"
                message={error}
            />
            )}

            {empty && (<PopUp
                alert="Attention"
                message="Not results found, please change your search"
            />
            )}
            
            
        <div className="input-group mb-3">
            <Label
            htmlfor="name_search"
            nameClass="form-control label"
            label="Find your recipe"
            ></Label>

            <Input
            id="name_search"
            nameClass="form-control input"
            placeholder="Recipe's name"
            value= {getInput}
            onChange ={(e: React.ChangeEvent<HTMLInputElement>)=>setInput(e.target.value)}
                />
                
            <Button
            label="Send"
            onClick={handleSendFirstBtn}
            variant="btn btn-primary"
                />
                
        </div>
        </>
    );
}

