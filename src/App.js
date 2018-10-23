import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "d9b8337ae5e8fcff96842247d8202bb0";

class App extends React.Component {
  getWeather = async () => {
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}
`);
    const data = await api_call.json();
    console.log(data);
  }
  render () {
    return (
      <div>
        <div>
          <h1> Hi There! </h1>
        </div>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
}

export default App;
