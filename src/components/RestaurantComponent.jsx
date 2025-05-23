import React from 'react';
import { IMG_URL } from '../utils/constants';

const RestaurantComponent = ({ imageName, name, cuisines, rating, time, address }) => {
    return (
        <>
            <div className="food-container">
                <div className="image-ctn">
                    <img src={`${IMG_URL}${imageName}`} />
                </div>
                <h3>{name}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'baseline' }}>
                    <h5>⭐{rating}</h5>
                    <h5>.</h5>
                    <h5>{time} minutes</h5>
                </div>
                <h5 className="">{cuisines}</h5>
                <h5>{address}</h5>
            </div>
        </>
    )
}


export default RestaurantComponent;