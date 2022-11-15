import styled from "styled-components";
import React, { useState } from "react";
import CityComponent from "./modules/CityComponents";
import WeatherInfoComponent from "./modules/WeatherInfoComponent";
import Axios from "axios";

const APIKEY = "26c811194e2cb533504b75cfee2f2704";

export const WeatherIcons = {
  "01d": "logo/sunny.svg",
  "01n": "logo/night.svg",
  "02d": "logo/day.svg",
  "02n": "logo/cloudy-night.svg",
  "03d": "logo/cloudy.svg",
  "03n": "logo/cloudy.svg",
  "04d": "logo/perfect-day.svg",
  "04n": "logo/cloudy-night.svg",
  "09d": "logo/rain.svg",
  "09n": "logo/rain-night.svg",
  "10d": "logo/rain.svg",
  "10n": "logo/rain-night.svg",
  "11d": "logo/storm.svg",
  "11n": "logo/storm.svg",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background-color: white;
  transition: transform 500ms;
`;

const Applable = styled.span`
color: black;
margin: 10px auto;
font-size: 36px;
font-weight: bold;
`;

function App() {
  const [city,updateCity] = useState();
  const [weather,updateWeather] = useState();

  const fetchWeather = async(e) => {
    e.preventDefault();
    const response= await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`,);
    console.log(response.data);
    updateWeather(response.data);
  }

  return (
      <Container>
        <Applable>Weather</Applable>
        
        {city && weather ? (<>
        <button type='button' onClick={(e)=>{
          e.preventDefault();
          updateCity();
          updateWeather();
        } }>Back</button>
        <WeatherInfoComponent weather={weather} city={city} />
        </>
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
      </Container>
  );
}

export default App;
