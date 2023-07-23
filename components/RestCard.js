import { IMG_URL } from "../utils/constant";

export const RestCard = (props) => {
    const {resdata} = props;
    const resData = resdata.info;   // 1way to destructure
    // const {cloudinaryImageId, name, area, cuisines, costForTwo, avgRating } = resdata.data;  //2nd way best
    return(
        // Stringg is the url where the image is hosted(CDN URl remains the sane)
        <div className="restcard" >
            <img src= 
            { IMG_URL + resData.cloudinaryImageId    } 
            alt="resimage" className="imagecard" />
            <h4>Name: {resData.name} </h4>
            <h4>Area: {resData.area} </h4>
            <h4>Cuisines: {resData.cuisines.join(', ')} </h4>
            <h5>Cost: {resData.costForTwo / 100 } ForTwo </h5>
            <h5>Rating: {resData.avgRating} </h5>
        
        </div>
    )
}