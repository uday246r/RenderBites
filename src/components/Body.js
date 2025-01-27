import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData"
import { useEffect, useState } from "react";

const Body = () => {

    const [listOfRestaurants, setlistOfRestaurants] = useState([]);

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async() => {
    
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
                );
        const json = await data.json();
        console.log(json);
        setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     
    }

    return (
        <div className="body">
            <div className="filter">
                <button 
                  className="filter-btn"
                  onClick={()=>{
                    const filteredResList = listOfRestaurants.filter(
                        (res) => {
                          const avgRating = res?.info?.avgRating > 4.6;
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
                  <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};



export default Body