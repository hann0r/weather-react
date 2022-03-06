import React from "react";
import ReactDOM from "react-dom";
import CurrentWeather from "./CurrentWeather.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <CurrentWeather />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
