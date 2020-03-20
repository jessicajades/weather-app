import "./styles.css";
import React from "react";
import icons from "./icons/a01d.png";

const WeatherItem = ({ weather }) => {
    console.log("weather", icons);

    return (
        <div className="item-container">
            <div className="item-data">
                {weather.valid_date}
                <img src="../icons/a01d.png" className="weather-icon" />
                <br />
                Low: {weather.min_temp} / High: {weather.max_temp}
            </div>
        </div>
    );
};

export default WeatherItem;
