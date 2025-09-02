import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import resList from "../utils/mockData"
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RES_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const Body = () => {

    const [listOfRestaurants, setlistOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setsearchText] = useState("");
    const [name, setName] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    const {loggedInUser, setUserName} = useContext(UserContext);

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async() => {
    
        const data = await fetch( RES_URL );
        const json = await data.json();
        console.log(json);
        setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false)
        return(
    <h1>
        Looks like you're offline!! Please check your internet connection;
    </h1>
        );
    

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
                    <div className="userNameContext">
                    <input value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}></input>
                </div>
                </div>
                
            <div className="res-container">
                {
                  filteredRestaurant.map(restaurant => (
                  <Link 
                     key={restaurant?.info?.id}
                     to={"/restaurant/" + restaurant?.info?.id}>
                        {
                            restaurant?.data?.promoted ? (
                            <RestaurantCard resData={restaurant} /> 
                            ) : (
                            <RestaurantCardPromoted resData={restaurant} />
                            )
                        }
                        </Link>
                ))}
            </div>
        </div>
    );
};



export default Body