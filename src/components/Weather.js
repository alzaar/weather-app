import React from "react";

const Weather = props => (
  <div>
    { props.city && props.country && <p>Location: {props.city}, {props.country}</p> }
    { props.temperature && <p>Temperature: {Math.floor(props.temperature - 273.15)}</p> }
    { props.humidty && <p>Humidity: {props.humidity}</p> }
    { props.description && <p>Conditions: {props.description}</p> }
    { props.error && <p>{props.error}</p> }
 </div>
);
export default Weather;
