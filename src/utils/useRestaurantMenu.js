import { useEffect, useState } from "react";
import { SWIGGY_RESTAURANT_MENU_URL } from '../utils/constants';

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchMenu()
    }, []);

    const fetchMenu = async () => {
        try {
            const data = await fetch(SWIGGY_RESTAURANT_MENU_URL + resId);
            const json = await data.json();
            // console.log(json);
            setResInfo(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
            console.log(resInfo)
        } catch (error) {
            console.error(error)
        }
    }
    return resInfo;
}

export default useRestaurantMenu;