import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData"
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfRestaurants, setlistOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setsearchText] = useState("");

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
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    

    return listOfRestaurants.length === 0 ? (
        <Shimmer/>
    ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input 
                    type="text" 
                    className="search-box" 
                    value={searchText} 
                    onChange={(e)=>{
                        setsearchText(e.target.value);
                    }} 
                    />
                    <button onClick={()=>{
                       const filteredRestaurant = listOfRestaurants.filter(
                        (res)=>res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setFilteredRestaurant(filteredRestaurant);
                    }}>Search</button>
                </div>
                <button 
                  className="filter-btn"
                  onClick={()=>{
                    const filteredResList = listOfRestaurants.filter(
                        (res) => {
                          const avgRating = res?.info?.avgRating > 4.6;
                          return avgRating ;
                        }
                      );
                      
                      setFilteredRestaurant(filteredResList);


                   }}
                    >
                        Top Rated Restaurants
                        </button>
                </div>
            <div className="res-container">
                {
                  filteredRestaurant.map(restaurant => (
                  <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};



export default Body