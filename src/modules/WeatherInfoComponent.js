import styled from "styled-components";
import React from "react";
import {WeatherIcons} from "../App";

export const WeatherInfoIcons = {
  sunset: "logo/temp.svg",
  sunrise: "logo/temp.svg",
  humidity: "logo/humidity.svg",
  wind: "logo/wind.svg",
  pressure: "logo/pressure.svg",
};

const Location = styled.span`
  margin: 15px auto;
  text-transform: capitalize;
  font-size: 28px;
  font-weight: bold;
`;
const Condition = styled.span`
  margin: 20px auto;
  text-transform: capitalize;
  font-size: 14px;
  & span {
    font-size: 28px;
  }
`;
const WeatherInfoLabel = styled.span`
  margin: 20px 25px 10px;
  text-transform: capitalize;
  text-align: center;
  width: 90%;
  font-weight: bold;
  font-size: 14px;
`;
const WeatherIcon = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px auto;
`;
const WeatherContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;
const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;

const WeatherInfoComponent = (props)=>{
    const {name ,value} = props;
    return (<InfoContainer>
        <InfoIcon src={WeatherInfoIcons[name]}></InfoIcon>
        <InfoLabel>
            {value} <span>{name}</span>
        </InfoLabel>
    </InfoContainer>)
}

const WeatherComponent = (props)=>{
  
  const {weather, city} = props;
  const isday = weather?.weather[0].icon?.includes('d')
  const getTime = (a) => {
    return `${new Date(a*1000).getHours()}:${new Date(a*1000).getMinutes()}`
  }
    return <>
    <WeatherContainer>
        <Condition><span>{`${Math.floor(weather?.main?.temp-273)} °C |` }</span> {weather?.weather[0]?.description}</Condition>
        <WeatherIcon src={WeatherIcons[weather?.weather[0]?.icon]} alt={weather?.weather[0].icon}/>
        <Location>{weather?.sys?.city}, {weather?.sys?.country}</Location>
        <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
        <WeatherInfoContainer>
            <WeatherInfoComponent name={isday? "sunrise":"sunset"} value={`${getTime(weather?.sys[isday?"sunrise":"sunset"])}`}/>
            <WeatherInfoComponent name={"humidity"} value={weather?.main?.humidity}></WeatherInfoComponent>
            <WeatherInfoComponent name={"wind"} value={weather?.wind?.speed}></WeatherInfoComponent>
            <WeatherInfoComponent name={"pressure"} value={weather?.main?.pressure}></WeatherInfoComponent>
        </WeatherInfoContainer>
    </WeatherContainer>
    </>
};

export default WeatherComponent;