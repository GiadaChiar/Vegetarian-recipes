//import React from "react";
/*import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
*/

import "../style/home.scss";
import Form from "../components/form";




function Home() {
    return (
        <>
            <div id ="home_container">
                <video autoPlay muted loop id="video-index">
                    <source src="../public/video/3195650-uhd_3840_2160_25fps.mp4" type="video/mp4"/>
                    Your browser does not support the video.
                </video>
                <div className="content">
                    <h2 id="texth2">The word of the day is</h2>
                    <br/>
                    <h1 id="texth1">Eat!</h1>
                    <p id="textp">This is an undisputed law of well-being</p>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button className="btn btn-primary" type="button" id="show_more">vegetarian recipes</button>
                    </div>
                </div>
            </div>
        </>
    )
}

function HomePage() {
    return (
    <>
        <Home />
        <Form />
    </>
    );
}

export default HomePage;


