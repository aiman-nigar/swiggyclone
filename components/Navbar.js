import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

export default Navbar =  () => {

    const [ navbtn, setnavbtn ] = useState("LogIn")
    return(
        <div className="navbar" >
            <div className="logo" >
                <img src= {LOGO_URL} alt="logo" />
            </div>

            <div className="list">
                <ul className="navlist" >
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                
            </div>

            <div>
                <button className="btn1" onClick={() => {
                    navbtn === 'LogIn'? 
                    setnavbtn("LogOut") : setnavbtn('LogIn') }} > {navbtn} </button>
            </div>
        </div>
    )
}