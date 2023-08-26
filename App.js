import React, { Suspense, lazy } from "react";
import * as ReactDOM from 'react-dom/client';
import './style.css';
import Navbar from "./components/Navbar";
import { Body } from "./components/Body";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Errorelement } from "./components/Errorelement";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Resturant } from "./components/Resturant";
// import Grocery from "./components/Grocery";

// For importing grocery component, we use lazy loading nd use imppppppport function
const Grocery = lazy(() => import("./components/Grocery"));  //it'll create separate bundle for this component

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
            path: "/grocery",
            element: <Suspense fallback={ <h1> Loading..... </h1> } > <Grocery/> </Suspense>,
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