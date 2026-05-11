// Estra filters in  Search page

//Big componet
import Label from "./label";
import Input from "./input";
import Button from "./button";
import { DropDown } from "./dropdown";
import { useState } from "react";
import { apiKey } from "../redux/store";
import axios from "axios";
//save sesults into redux
import { useDispatch } from "react-redux";
import { setRecipe } from "../redux/recipeSlice";
import temporaryState from "../components/functionState";
import PopUp from "./popUp";






//filters in the search page Time, Vitamin.....(Collapse Section)
export default function FiltersCollapse() {
    //get input
    const [getInput, setInput] = useState("");
    const [getTime, setTime] = useState("");
    const [getKcal, setKcal] = useState("");
    const [getVitamin, setVitamin] = useState("");

    const dispatch = useDispatch();

    //state fetch 
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [empty, setEmpty] = useState(false);

    //function click fetch filters
    const handleSerchFilters = async () => {
        console.log("CLICCATO FAI LA FETCH FILTRI");
        console.log("input inserito:", getInput);
        console.log("kcal inserito:", getKcal);
        console.log("vitamin inserito:", getVitamin);
        console.log("TEMPO INSERITO: ", getTime);
        //create a fetch

        if (
                getInput === "" &&
                getKcal === "" &&
                getVitamin === "" &&
                getTime === ""
            ) {
                return;
        }
        
        try {

            setLoading(true);
            setError("");

            const params = new URLSearchParams();
            params.append("diet", "vegetarian");

            if (getInput) {
                params.append("includeIngredients", getInput);
            }

            if (getKcal) {
                params.append("maxCalories", getKcal);
            }

            if (getTime) {
                params.append("maxReadyTime", getTime);
            }

            if (getVitamin) {
                params.append(`minVitamin${getVitamin}`, "500");
            }

            params.append("addRecipeInformation", "true");
            params.append("fillIngredients", "true");
            params.append("instructionsRequired", "true");
            params.append("number", "5");
            params.append("apiKey", apiKey);

            const response = await axios.get(
                `https://api.spoonacular.com/recipes/complexSearch?${params.toString()}`
            );
            console.log(response)

            const results = response.data.results;
            console.log(results);
            if (results.length === 0) { 
                temporaryState(setEmpty, true, false);
                return;
            }
            dispatch(setRecipe(results));
        
        } catch {
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
            



        <button
            className="btn btn-primary"
            id="filterButton"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#filterCollapse"
            aria-expanded="false"
            aria-controls="filterCollapse"
        >
            Filters
        </button>

        <div className="collapse" id="filterCollapse">
            <form id="filter">
            <div className="card card-body" id="filterSection">
                <div className="inLine">
                <DropDown
                    label="TIME"
                    id="time_drop"
                    options={[
                    { label: "=< 10 min", value: "10" },
                    { label: "=< 15 min", value: "15" },
                    { label: "=< 30 min", value: "30" },
                    { label: "=< 60 min", value: "60" },
                    { label: "TIME", value: "" },
                    ]}
                    //onSelect={(value) => console.log(value)}
                    onSelect={(value) => setTime(value)}
                />

                <DropDown
                    label="KCALORIES"
                    id="kcal_drop"
                    options={[
                    { label: "=< 200 Kcal", value: "200" },
                    { label: "=< 400 Kcal", value: "400" },
                    { label: "=< 600 Kcal", value: "600" },
                    { label: "=< 800 Kcal", value: "800" },
                    { label: "KCALORIES", value: "" },
                    ]}
                    onSelect={(value) => setKcal(value)}
                />

                <DropDown
                    label="VITAMINS"
                    id="vitamins_drop"
                    options={[
                    { label: "A", value: "A" },
                    { label: "B", value: "B" },
                    { label: "C", value: "C" },
                    { label: "D", value: "D" },
                    { label: "E", value: "E" },
                    { label: "K", value: "K" },
                    { label: "VITAMINS", value: "" },
                    ]}
                    onSelect={(value) => setVitamin(value)}
                />
                </div>

                <div className="input-group mb-3">
                <Label
                    label="Ingridient"
                    htmlfor="search_ingridient"
                    nameClass="form-control label"
                />

                <Input
                    id="search_ingridient"
                    nameClass="form-control input"
                    placeholder="carrots"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setInput(e.target.value)
                    }
                />

                <Button
                    label="Send"
                    variant="btn btn-primary w-100"
                    onClick={handleSerchFilters}
                />
                </div>
            </div>
            </form>
        </div>
        </>
    );
}




























