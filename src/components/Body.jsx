import { React, useState, useEffect } from "react";
import RestaurantComponent from "./RestaurantComponent";
// import { resData, restaurantList } from "../utils/mockData";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      console.log(json);

      // setRestaurantData((prev) => json.data);

      console.log(restaurantData);

      setRestaurantData(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants?.cards
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //   if (restaurantData.length === 0) {
  //   }

  return (
    <div className="body">
      <div className="filter">
        <button
          onClick={() => {
            const filteredRestaurant = restaurantData.filter((res) => {
              console.log(res);
              res.info.avgRating > 4;
            });
            setRestaurantData(filteredRestaurant);
          }}
        >
          Filter
        </button>
      </div>
      {restaurantData.map((e, i) => {
        // console.log(e.info)
        const {
          id,
          cloudinaryImageId,
          name,
          cuisines,
          avgRating,
          sla,
          areaName,
        } = e.info;
        // return (
        //   <RestaurantComponent
        //     name={e.name}
        //     cuisines={e.cuisines}
        //     rating={e.rating}
        //     time={e.time}
        //     key={i}
        //   />
        // );
        return (
          <RestaurantComponent
            /*imageName={cloudinaryImageId}*/ name={name}
            cuisines={cuisines.join(", ")}
            rating={avgRating}
            time={sla.slaString}
            address={areaName}
            key={id}
          />
        );
      })}
    </div>
  );
};

export default Body;
