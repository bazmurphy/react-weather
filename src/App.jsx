import React from 'react';
import { createRoot } from 'react-dom/client';
import { useEffect, useState } from 'react';
// import getWeatherDataFromApi from './getWeatherDataFromApi';
import UserInteraction from './UserInteraction';
import WeatherDisplay from './WeatherDisplay';
import './App.css';

const App = () => {

  const [location, setLocation] = useState("London");
  // ^ the state string that triggers the useEffect, and is set by the input text field
  const [weatherData, setWeatherData] = useState({});
  // ^ the state object that stores the API fetch data
  const [loading, setLoading] = useState(true);
  // ^ why can't i set this to false initially(???)
  const [errorOccurred, setErrorOccurred] = useState(false);
  // ^ the state string that toggles the error message

  useEffect(() => {
    
    const getWeatherDataFromApi = async (location) => {
      try {
        const APIKEY = `51178a0aeac643629d5204449230702`;
        // ^ this should really be stored in an .env file
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${location}&aqi=no`);
        if (response.ok && response.status === 200 ) {
          const data = await response.json();
          console.log("getWeatherDataFromApi Result:", data);
          setWeatherData(data);
          setLoading(false);
          setErrorOccurred(false);
        } else {
          setErrorOccurred(true);
          setLoading(false);
        }
        // HOW TO HANDLE ERROR (404 etc) IN A REACTY WAY...
      } catch (error) {
        console.log("getWeatherDataFromApi Error:", error);
      }
    }

    getWeatherDataFromApi(location);

    // (async () => {
    //     const data = await getWeatherDataFromApi(location);
    //     console.log(`useEffect anonymous async function ran`, data)
    //     if (data) {
    //       setWeatherData(data);
    //       setLoading(false);
    //       setErrorOccurred(false);
    //     } else {
    //       setWeatherData({});
    //       setErrorOccurred(true);
    //     }
    // })();
    // ^ immediately invoked async function expression

  }, [location]);
  // ^ location is the dependency that triggers the useEffect

  return (
    <div id="App">
      <UserInteraction setLocation={setLocation} errorOccurred={errorOccurred} />
      {!loading ? 
        <WeatherDisplay weatherData={weatherData} /> 
        : 
        <div>Loading..</div>
      }
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);