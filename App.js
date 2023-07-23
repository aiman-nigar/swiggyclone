import React from "react";
import ReactDom from "react-dom/client";

import './style.css';
import Navbar from "./components/Navbar";
import { Body } from "./components/Body";



const App = () => {
    return(
        <React.Fragment>
        <Navbar/>
        <Body/>
        </React.Fragment>

    )
}



const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App/>);