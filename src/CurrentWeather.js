import React from "react";
import Search from "./Search.js";

import "./CurrentWeather.css";

export default function CurrentWeather() {
  let weatherData = {
    city: "Cambridge",
    temperature: 25,
    date: "Sunday 14:00",
    description: "Few clouds",
    imgUrl: "https://openweathermap.org/img/wn/02d@2x.png",
    humidity: 46,
    wind: 2,
  };

  return (
    <div className="containter">
      <div className="weather-app">
        <div className="CurrentWeather">
          <Search />

          <div className="overview">
            <h1>{weatherData.city}</h1>
            <ul>
              <li>{weatherData.date}</li>
              <li>{weatherData.description}</li>
            </ul>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="clearfix weather-temperature">
                <img
                  src={weatherData.imgUrl}
                  alt={weatherData.description}
                  className="float-left"
                />
                <div className="float-left">
                  <strong>{weatherData.temperature}</strong>
                  <span className="units">°F</span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  Humidity: <span>{weatherData.humidity}</span>%
                </li>
                <li>
                  Wind: <span>{weatherData.wind}</span> mph
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
