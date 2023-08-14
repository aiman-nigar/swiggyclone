import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useStatus from "../utils/customHooks/useStatus";

export default Navbar =  () => {

    const [ navbtn, setnavbtn ] = useState("LogIn")

const onlinesatus = useStatus();

    return(
        <div className="navbar" >
            <div className="logo" >
                <img src= {LOGO_URL} alt="logo" />
            </div>

            <div className="list">
                <ul className="navlist" >
                    <li> { onlinesatus === true ? '🟢' : '🔴'} </li>
                    <li><Link to="/" >  Home </Link></li>
                    <li><Link to="./About"> About  </Link> </li>
                    <li><Link to="./contact">Contact</Link></li>
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