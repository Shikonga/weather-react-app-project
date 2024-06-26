import React, { useState, useEffect } from "react";
import axios from "axios";
import DailyForecast from "./DailyForecast";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);
  
    useEffect(() => {
      setLoaded(false);
    }, [props.coordinates]);
  
    function handleResponse(response) {
      setForecast(response.data.daily);
      setLoaded(true);
    }
  
    function load() {
      let longitude = props.coordinates.lon;
      let latitude = props.coordinates.lat;
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=5f472b7acba333cd8a035ea85a0d4d4c&units=metric`;
  
      axios.get(apiUrl).then(handleResponse);
    }
  
    if (loaded) {
      return (
        <div className="WeatherForecast">
          <div className="row">
            {forecast.map(function (dailyForecast, index) {
              if (index < 5) {
                return (
                  <div className="col" key={index}>
                    <DailyForecast data={dailyForecast} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      );
    } else {
      load();
  
      return null;
    }
  }