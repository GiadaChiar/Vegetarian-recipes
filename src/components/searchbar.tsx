//component group defaul serach on Search page

import Label from "../components/label";
import Input from "../components/input";
import Button from "./button";



//serch for recipe's name



export default function SearchBar() {

    const handleSendFirstBtn = () => {
        console.log("BOTTONE 1 CLICCATO");
        console.log("METTI LOGICA FETCH PER NOME");
    };
    
    return (
        <>
        <div className="input-group mb-3">
            <Label
            htmlfor="name_search"
            nameClass="form-control label"
            label="Find your recipe"
            ></Label>

            <Input
            id="name_search"
            nameClass="form-control input"
            placeholder="Recipient's username"
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

