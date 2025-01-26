import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData"
import { useState } from "react";

const Body = () => {

    const [listOfRestaurants, setlistOfRestaurants] = useState(resList);

    return (
        <div className="body">
            <div className="filter">
                <button 
                  className="filter-btn"
                  onClick={()=>{
                    const filteredResList = resList.filter(
                        (res) => {
                          const avgRating = res?.card?.card?.restaurant?.info?.avgRating < 4.6;
                          return avgRating ;
                        }
                      );
                      
                      setlistOfRestaurants(filteredResList);


                   }}
                    >
                        Top Rated Restaurants
                        </button>
                </div>
            <div className="res-container">
                {
                  listOfRestaurants.map(restaurant => (
                  <RestaurantCard key={restaurant?.card?.card?.info?.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};



export default Body