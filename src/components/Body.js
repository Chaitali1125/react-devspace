import { React, useState, useEffect } from "react";
import RestaurantComponent, { withPriceLabel } from "./RestaurantComponent";
import Shimmer from "./ShimmerRestaurant";
// import { resData, restaurantList } from "../utils/mockData";
import { SWIGGY_API_URL_OLD, SWIGGY_API_URL } from "../utils/constants";

import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_API_URL);
      const json = await data.json();

      // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      // console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

      setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    } catch (error) {
      console.log(error);
    }
  };

  const RestaurantComponentWithPriceLabel = withPriceLabel(RestaurantComponent);

  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <>
        <div className="no-connection">
          <h4>No internet connections.</h4>
          <h4>Please check your internet settings.</h4>

          <button className="tryAgainBtn" onClick={() => {
            location.reload()
          }}>Try Again</button>
        </div>
      </>
    )
  }

  return restaurantList?.length === 0
    ? <Shimmer />
    : (
      <div className="body">
        <div className="flex px-8 justify-evenly m-1 bg-white shadow-sm">
          <div>
            <input
              type="search"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value)
              }}
              className="border border-gray-200 rounded-lg cursor-pointer"
            />
            <button
              className="px-4 py-1 bg-green-100 m-4 rounded-lg text-green-500 cursor-pointer"
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
              className="px-4 py-1 bg-gray-100 m-4 rounded-lg text-gray-700 cursor-pointer"
              onClick={() => {
                const filterList = restaurantList.filter((res) => res.info.avgRating > 4)
                setFilteredRestaurant(filterList)
              }}>
              Top Rated Restaurants
            </button>
          </div>
        </div>

        <div className="outer-card">
          <div style={{}} className="grid grid-flow-col grid-rows-2 gap-4 px-20">
            {/* <div><h2>Restaurants with online food delivery orders in pune</h2></div> */}
            {/* <InfiniteScroll
            dataLength={this.state.items.length}
            next={this.fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
          > */}
            {
              filteredRestaurant.map((restaurant, restaurantIndex) => (
                <Link
                  to={"/restaurant/" + restaurant?.info.id}
                  key={restaurant?.info.id} className="hover:shadow-2xl rounded-2xl">
                  {/*  If  the restaurant has price label then adding label on top of RestaurantComponent */}
                  {restaurant?.info.aggregatedDiscountInfoV3 ?
                    <RestaurantComponentWithPriceLabel resData={restaurant?.info} />
                    : <RestaurantComponent resData={restaurant?.info} />}
                </Link>

              ))
            }
            {/* </InfiniteScroll> */}

          </div>
        </div>

      </div>
    )
};

export default Body;
