import React, { useState } from "react";
import "./Temperature.css";

export default function WeatherTemperature(props) {
  let [unit, setUnit] = useState("celsius");

  function showFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function farenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12">
            <span className="temperature">
              {Math.round(props.celsius)}
              <span className="unit">
                <span className="celsius"> °C </span>
                <a href="/" className="farenheit" onClick={showFarenheit}>
                  °F
                </a>
              </span>
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-12">
              <span className="temperature">{Math.round(farenheit())}</span>
              <span className="unit">
                <a href="/" onClick={showCelsius}>
                  °C
                </a>{" "}
                | °F
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
