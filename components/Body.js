import { RestCard } from "./RestCard";
import '../style.css';
import resjsono from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimer from "./Shimer";
import { Link } from "react-router-dom";


export const Body = () => {

  //USING STATE:
    const [ resjson, setresjson] = useState([]);
    const [ searchtext, setsearchtext] = useState("");
    const [ filteredresturant, setfilteredresturant] = useState([]);
    const [ disabled, setdisabled] = useState(false)
    console.log('body rendering times');


    //Just after rendering first, it will call
    useEffect(()=>{
      fetchData();
    }, []);


    const fetchData = async() => {
      const newdata = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4986092&lng=77.3999054&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

      // But Our browser block or not allowing us to call api from the localhost
      // Origin mismatch this is CORS policy
      // BUT we can bypass this cors using extension cors 
 
      const newjsondata = await newdata.json();
      // console.log(newjsondata.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
      //   );

        setresjson(newjsondata.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredresturant(newjsondata.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);

    }

    //conditional rendering
    //rendring on the basis of condition
    if(resjson.length === 0){
      return <Shimer/>
    }

    function notdisable() {
      setdisabled(!disabled);
    }

    return(
     <div className="body" >
        <div className="filter">
              <input className="input" value={searchtext} placeholder="Type here..." type="text" disabled={disabled}  onChange={(event)=> setsearchtext(event.target.value) } ></input>
            {/* 1 BUTTON */}
              <button className="btn1"  onClick={() => {
                const filteredsearch = resjson.filter((res) => res.info.name.toLowerCase().includes(searchtext.toLowerCase()))
                setfilteredresturant(filteredsearch);
                // setresjson(filteredsearch);
                console.log(filteredsearch);

                notdisable();

              } } > Search Me</button>


            {/* 2nd button */}

              <button className="btn1" onClick={() =>  {
                  setfilteredresturant(resjson)
              }        
              } > Refresh </button>

              {/* 3rd button */}
              <button className="btn1" onClick={() => {
                  const filter = resjson.filter((res) => res.info.avgRating > 4);
                  console.log(filter); 
                  // setresjson(filter);
                  setfilteredresturant(filter);
                      }}
                      
                 >Rating 4.0+
              </button>
              
        </div>
        <div className="cardcontainer"  >
       
            {/* <RestCard resdata = {resjson[6]} /> */}
            {filteredresturant.map((resturant) => (
              <Link key = {resturant.info.id} className="link" to={'./resturant/'+ resturant.info.id}>
            <RestCard resdata = {resturant} ></RestCard> 
            </Link>
            ))}


        </div>
       </div>
    )
}