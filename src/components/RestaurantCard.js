import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) =>{            //here props is JS object here, as props is JS object so we can use it using {}
    console.log(props);
    const { resData } = props;
    
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla: {deliveryTime} = {}
    } = resData?.info;
    return(
        <div className="res-card" style={{ backgroundColor: "#f0f0f0"}}>
            <img className="res-logo"
             alt="res-logo"
             src={CDN_URL + cloudinaryImageId
             } 
             />
  
              <h3>{name}</h3>
              <h4>{cuisines.join(", ")}</h4>
              <h4>{deliveryTime} minutes</h4>
              <h4>{costForTwo}</h4>
              <h4>{avgRating} stars</h4>
         </div>

    );
};

// Higher Order Component

// Input -  RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) =>{
    return (props)=>{
        return(
            <div>
                <label className="promotedCard">Promoted</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;