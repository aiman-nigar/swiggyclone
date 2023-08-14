import { useState, useEffect } from "react";
import { RESTMENUURL } from "../constant";

//Here we are fetching the data

export const useResturantCard = (resid) => {

    const [resmenu, setresmenu] = useState(null);
    
useEffect(()=> { 
    fetchmenu();
}, []);

const fetchmenu = async() => {
    
       const fetchdata = await fetch(RESTMENUURL + resid + '&catalog_qa=undefined&submitAction=ENTER');

       const fetcheddata = await fetchdata.json();
     
    // console.log(fetcheddata);   
    console.log(fetcheddata?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards); //Recommended cards

    setresmenu(fetcheddata.data)
    // ?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
};

    return resmenu;

};