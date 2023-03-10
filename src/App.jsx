import React from 'react';
import { createRoot } from 'react-dom/client';
import { useEffect, useState } from 'react';
import APIKEY from './env/APIKEY';
import useFetch from './customHooks/useFetch';
import UserInteraction from './components/UserInteraction';
import Loading from "./components/Loading";
import WeatherDisplay from './components/WeatherDisplay';
import getYesterdaysDate from './helperFunctions/getYesterdaysDate';
import './App.css';

const App = () => {
  console.log(`App ran`);

  const [location, setLocation] = useState("London");

  const current = `https://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${location}&aqi=no`;
  const { loading : currentLoading, data: currentData, error: currentError } = useFetch(current);
  const history = `https://api.weatherapi.com/v1/history.json?key=${APIKEY}&q=${location}&dt=${(getYesterdaysDate())}`;
  const { loading: historyLoading, data: historyData, error: historyError } = useFetch(history);
  const forecast = `https://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${location}&days=2&aqi=no&alerts=no`;
  const { loading : forecastLoading, data: forecastData, error: forecastError } = useFetch(forecast);

  useEffect(() => {
    console.log(`App useEffect ran`);
  }, [location]);

  return (
      <div id="app-container">
        <UserInteraction 
          setLocation={setLocation} 
          currentError={currentError}
        />
        {(currentLoading || historyLoading || forecastLoading ) && 
          <Loading />}
        {(currentData && historyData && forecastData) &&
          <WeatherDisplay
            currentData={currentData}
            historyData={historyData}
            forecastData={forecastData}
          />}
      </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);