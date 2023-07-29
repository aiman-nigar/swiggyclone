import { useEffect, useState } from "react";
import Shimer from "./Shimer";
import { useParams } from "react-router-dom";
// import { RESTMENUURL } from "../utils/constant";

export const Resturant = () => {

    const [resmenu, setresmenu] = useState(null);

    const {resid} = useParams();
    console.log(resid);
    useEffect(()=> {
        fetchmenu();
    }, []);

    const fetchmenu = async() => {
        
           const fetchdata = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4986092&lng=77.3999054&restaurantId=214227&catalog_qa=undefined&submitAction=ENTER');

           const fetcheddata = await fetchdata.json();
         
        //    console.log(fetcheddata?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel[0]?.dish?.info?.name );
           console.log(fetcheddata?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards); //Recommended cards

           setresmenu(fetcheddata.data)
        // ?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
    }

    if(resmenu === 0) return <Shimer/> ;

    // console.log(resmenu[5]?.card?.info?.name);
    const {id, name, city, locality, areaName, cuisines, avgRating, costForTwoMessage } = 
    resmenu.cards[0].card?.card?.info;

    const {itemCards} = resmenu?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
   
    // const  name = resmenu.name;     //2016
    return(
     <div>  

     
         <h2> Resturant: {name}</h2>
         <h4> {locality}, {areaName}, {city } </h4>
         <h5> Rating: {avgRating} </h5>
         <br></br>
         <p>
            Cuisines: {cuisines.join(", ")};
         </p>

        
        <h2> MENU </h2>

        <li> {itemCards[2].card.info.name} </li>
        <li> {itemCards[1].card.info.name} </li>
        <li> {itemCards[0].card.info.name} </li>
    {/* <ul>
        {itemCards.map((item) => {
            <li key={item.card.info.id}> {item.card.info.name} </li>
        })}
    </ul> */}



        
     </div>

    )
}