import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.date.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <img src={props.data.icon} alt={props.data.description} />

            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 70%</li>
            <li>Wind: {Math.round(props.data.wind)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
