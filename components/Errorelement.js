import { useRouteError } from "react-router-dom";

export const Errorelement = () => {

    const styling = {
        margin: '1rem',
    };

    const errorfordisplay = useRouteError();

    console.log(errorfordisplay);

    return(
        <div style={styling}>
        <h1> Ooops!!!</h1>
        <h2> Something went wrong </h2>
        <h2> {errorfordisplay.statusText} </h2>
        </div>
    )
}