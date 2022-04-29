import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Cambridge, GB" />
        <p className="Poem">
          <strong>
            "Whether the weather be fine, <br />
            or whether the weather be not,
            <br /> Whether the weather be cold, <br />
            or whether the weather be hot, <br />
            We'll weather the weather, <br />
            whatever the weather, <br />
            Whether we like it or not.." <br />- Anonymous
          </strong>
        </p>
        <footer>
          Coded by <strong>Hannah Harries</strong>,{" "}
          <a
            href="https://github.com/hann0r/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-sourced on <strong>GitHub</strong> +
          </a>{" "}
          <a
            href="https://stupefied-yonath-695f15.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hosted on <strong>Netlify</strong>
          </a>
        </footer>
      </div>
    </div>
  );
}
