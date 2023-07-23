import { RestCard } from "./RestCard";
import '../style.css';
import resjsono from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimer from "./Shimer";


export const Body = () => {

  //USING STATE:
    const [ resjson, setresjson] = useState([]);


    //Just after rendering first, it will call
    useEffect(()=>{
      fetchData();
    }, []);


    const fetchData = async() => {
      const newdata = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.9321818&lng=78.08159529999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

      // But Our browser block or not allowing us to call api from the localhost
      // Origin mismatch this is CORS policy
      // BUT we can bypass this cors using extension cors 
 
      const newjsondata = await newdata.json();
      console.log(newjsondata.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
        );

        setresjson(newjsondata.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    }

    //conditional rendering
    //rendring on the basis of condition
    if(resjson.length === 0){
      return <Shimer/>
    }


    return resjson.length === 0 ? ( <Shimer/> ) : 
    (
       <div className="body" >
       <button className="btn1" onClick={() => {
          const filter = resjson.filter((res) => res.info.avgRating > 4);
          console.log(filter); 
          setresjson(filter);
              }} 
          
         >Rating 4.0+
         </button>
        <div className="cardcontainer"  >
       
            {/* <RestCard resdata = {resjson[6]} /> */}
            {resjson.map((resturant) => (
            <RestCard key = {resturant.info.id} resdata = {resturant} ></RestCard> 
            ))}


        </div>
       </div>
    )
}