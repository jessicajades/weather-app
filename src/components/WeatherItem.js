import "./styles.css";
import React from "react";

const WeatherItem = ({ weather }) => {
    return (
        <div className="item-container">
            <div className="item-data">
                Low: {weather.min_temp} / High: {weather.max_temp}
            </div>
        </div>
    );
};

export default WeatherItem;
