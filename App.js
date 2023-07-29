import React from "react";
import * as ReactDOM from 'react-dom/client';
import './style.css';
import Navbar from "./components/Navbar";
import { Body } from "./components/Body";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Errorelement } from "./components/Errorelement";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Resturant } from "./components/Resturant";

const App = () => {
    return(
        <React.Fragment>
        <Navbar/>
        {/* <Body/> */}
        <Outlet/>
        </React.Fragment>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Errorelement />,
        children: [{
            path: "/",
            element: <Body/>,
        },
        {
            path: "/about",
            element: <About/>,
        },
        {
            path: "/Contact",
            element: <Contact/>,
        },
        {
            path: "/resturant/:resid",
            element: <Resturant/>
        }
    ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App/>);
root.render( <RouterProvider router={appRouter} /> )