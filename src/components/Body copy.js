import { React, useState, useEffect } from "react";
import RestaurantComponent from "./RestaurantComponent";
import Shimmer from "./Shimmer";
// import { resData, restaurantList } from "../utils/mockData";
import { SWIGGY_API_URL_OLD, SWIGGY_API_URL } from "../utils/constants";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_API_URL);
      const json = await data.json();

      console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants);
      // console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

      setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return restaurantList?.length === 0
    ? <Shimmer />
    : (
      <div className="body">
        <div className="filter">
          <div>
            <input
              type="search"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value)
              }} />
            <button
              onClick={() => {

                console.log(searchText);

                const filterRestaurant = restaurantList.filter((res) =>
                  res.info?.name.toLowerCase().includes(searchText.toLowerCase())
                );

                console.log(filterRestaurant);

                setFilteredRestaurant(filterRestaurant);
              }}
            >
              Search
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                const filterList = restaurantList.filter((res) => res.info.avgRating > 4)
                setFilteredRestaurant(filterList)
              }}>
              Top Rated Restaurants
            </button>
          </div>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          marginTop: '25px'
        }}>
          {
            filteredRestaurant.map((restaurant, restaurantIndex) => (
              <RestaurantComponent resData={restaurant?.info} key={restaurant?.info.id} />
            ))}
        </div>
      </div>
    )
};

export default Body;
