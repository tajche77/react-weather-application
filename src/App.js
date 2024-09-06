import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Valencia" />
        <footer>
          This project was coded by
          <a
            href="https://github.com/tajche77?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            TamaraB
          </a>{" "}
          , is open-sourced on
          <a
            href="https://github.com/tajche77/react-weather-application"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          and is hosted on {""}
          <a
            href="https://kaleidoscopic-toffee-53c4a6.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
