import React from 'react';
import { createRoot } from 'react-dom/client';
import { useEffect, useState } from 'react';
import useFetch from './customHooks/useFetch';
import UserInteraction from './components/UserInteraction';
import Loading from "./components/Loading";
import WeatherDisplay from './components/WeatherDisplay';
import getYesterdaysDate from './helperFunctions/getYesterdaysDate';
import './App.css';

const App = () => {

  const [location, setLocation] = useState("London");
  // ^ the state string that triggers the useEffect, which is set by the input text field (inside UserInteraction.jsx)

  const APIKEY = `51178a0aeac643629d5204449230702`;
  // ^ this should really be stored in an .env file
  
  const yesterdaysDate = getYesterdaysDate();
  console.log(`yesterdaysDate:`, yesterdaysDate);

  // current.json
  const current = `https://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${location}&aqi=no`;
  const { loading : currentLoading, data: currentData, error: currentError } = useFetch(current);

  // history.json
  const history = `https://api.weatherapi.com/v1/history.json?key=${APIKEY}&q=${location}&dt=${yesterdaysDate}`;
  const { loading: historyLoading, data: historyData, error: historyError } = useFetch(history);

  // forecast.json
  const forecast = `https://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${location}&days=2&aqi=no&alerts=no`;
  const { loading : forecastLoading, data: forecastData, error: forecastError } = useFetch(forecast);

  useEffect(() => {
    console.log(`App.jsx useEffect ran`);
  }, [location]);

  return (
    <div id="app-container">
      <div id="app-subcontainer">
        <UserInteraction setLocation={setLocation} currentError={currentError} /> 
        {currentLoading && historyLoading && forecastLoading ? <Loading /> : <WeatherDisplay currentData={currentData} forecastData={forecastData} historyData={historyData} /> }
      </div>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);