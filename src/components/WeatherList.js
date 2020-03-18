import "./styles.css";
import React from "react";
import WeatherItem from "./WeatherItem";

const WeatherList = ({ forecast }) => {
    const renderedList = forecast.map(weather => {
        return <WeatherItem weather={weather} key={weather.datetime} />;
    });

    return <div className="weather-list">{renderedList}</div>;
};

export default WeatherList;
