import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <footer>
        coded by
        <a
          href="https://github.com/tajche77/react-weather-application"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          TamaraB
        </a>
        , and hosted on {""}
        <a
          href="https://kaleidoscopic-toffee-53c4a6.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}
