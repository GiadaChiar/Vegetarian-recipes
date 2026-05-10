//standard cart and functionalities

//import { apiKey } from "../redux/store";
//import axios from "axios";
import { useNavigate } from "react-router-dom";

type RealCartProps = {
    extraClass: string;
    foodImage: string;
    nameText: string;
    timeText: string;
    healthy: string;
    code: string;
};






export default function RealCart({
    extraClass,
    foodImage,
    nameText,
    timeText,
    healthy,
    code,
    }: RealCartProps) {
    const numerHelthy = Number(healthy);
    const valueStar = (numerHelthy * 5) / 100;
    //if value is decimal half Star
    const fullStars = Math.floor(valueStar);
    const halfStar = valueStar % 1 >= 0.5;

    const navigate = useNavigate();

    const handleClick = () => {
        console.log("Cliccatooo codice ", code);
        //change page and pass my card code 
        navigate(`/recipe/${code}`);
    };

    return (
        <>
        <div className={`cart ${extraClass || ""}`} id={code}>
            <div className="imgCart">
            <img src={foodImage} alt="food image recipe" />
            </div>

            <div className="nameCart">
            <a onClick={handleClick}>{nameText}</a>
            </div>

            <div className="timeCard">
            <p>{timeText} min</p>
            <img src="../public/images/clock.png" alt="green clock icon" />
            </div>

            <div className="starSection">
            {[...Array(5)].map((_, index) => {
                //star yellow
                if (index < fullStars) {
                return (
                    <i
                    key={index}
                    className="bi bi-star-fill starIcon starYellow"
                    ></i>
                );
                }

                if (index === fullStars && halfStar) {
                return (
                    <i
                    key={index}
                    className="bi bi-star-fill starIcon starthalf"
                    ></i>
                );
                }

                //add logic half star
                else {
                return (
                    <i
                    key={index}
                    className="bi bi-star-fill starIcon startblack"
                    ></i>
                );
                }
            })}
            </div>
        </div>
        </>
    );
}