// import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { CDN_URL } from "../utils/constants"
import RestaurantCategory from "./RestaurantCategory";

// import { MENU_API } from "../utils/constants"

const RestaurantMenu = () =>{

    // const [resInfo, setResInfo] = useState(null);
    
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    
    // useEffect(() => {
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async()=>{
    //     const data = await fetch( MENU_API+ resId );
    //     const json=await data.json();
    //     setResInfo(json?.data);
    // };

    if(resInfo===null) return <Shimmer/>;
    
   const {name,cloudinaryImageId, cuisines, costForTwo} = resInfo?.cards[2]?.card?.card?.info ;
   const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ;
//    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

   const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=> c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
   console.log("hello",categories);

    return (
        <div className="Menu">
            <h1 className="menuRestaurantName">{name}</h1>
            {/* <div className="res-card" style={{ backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" 
             alt="res-logo"
             src={CDN_URL + cloudinaryImageId}
             />
                </div> */}
            <p className="menuRestaurantData">
                {cuisines.join(", ")} - {costForTwo}
                </p>

                {/* Categories accordian */}

                {
                    categories.map((category)=>(
                        <RestaurantCategory key={category?.card?.card?.itemCards?.card?.info?.id} data={category?.card?.card}/>
                    ))
                }


            {/* <h2>Menu</h2>
            <ul>
                {itemCards.map(item=> (
                    <li key={item?.card?.info?.id}>
                        {item?.card?.info?.name} - {"Rs. "}{item?.card?.info?.price / 100 || item?.card?.info?.price / 100 }
                         </li>
                    ))}
            </ul> */}
        </div>
    );
};

export default RestaurantMenu;


