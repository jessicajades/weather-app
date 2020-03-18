import "./styles.css";
import React from "react";
import SearchBar from "./SearchBar";
import WeatherList from "./WeatherList";
import axios from "axios";

class App extends React.Component {
    state = { forecast: [], location: "" };

    onLocationSubmit = async location => {
        const res = await axios.get(
            `http://api.weatherbit.io/v2.0/forecast/daily?key=d3123d2aa6024afea2cad7947d366abe&city=${location}&units=I&days=5`
        );

        this.setState({
            forecast: res.data.data,
            location: res.data.city_name
        });

        console.log(this.state.forecast);
    };

    render() {
        const location = this.state.location;
        let text;

        if (location) {
            text = <h2>Weather for: {location}</h2>;
        }

        return (
            <div className="app-container">
                <h1 className="title">5-Day Weather Forecast</h1>
                <SearchBar onFormSubmit={this.onLocationSubmit} />
                <div>
                    {location ? (
                        <h2 className="location-name">
                            Weather for: {location}
                        </h2>
                    ) : null}
                </div>
                <WeatherList forecast={this.state.forecast} />
            </div>
        );
    }
}

export default App;
