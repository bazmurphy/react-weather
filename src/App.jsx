import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [city, setCity] = useState("London");
  // ^ the state string that triggers the useEffect, and is set by the input text field
  const [weatherData, setWeatherData] = useState({});
  // ^ the state object that stores the API fetch data
  const [error, setError] = useState("");
  // ^ the state string that toggles the error message

  useEffect(() => {

    async function getWeatherDataFromApi () {
      // ^ to use async in useEffect make an async function and then immediately call it..

      try {
        const APIKEY = `51178a0aeac643629d5204449230702`;
        // ^ this should really be stored in an .env file
        
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${city}&aqi=no`);
        const data = await response.json();
        console.log(`fetch result:`, data);

        function convertConditionCodeToImageSrc(code) {
          // ^ take the current.condition.code from the api and convert it to a custom image src url (stored in /public/images/)
          const imageSources = {
            "1000" : "clear-day.svg",
            "1003" : "partly-cloudy-day.svg",
            "1006" : "cloudy.svg",
            "1009" : "overcast.svg",
            "1030" : "mist.svg",
            "1135" : "fog.svg",
            "1183" : "rain.svg",
            "1189" : "rain.svg",
            "1195" : "rain.svg",
          }
          return `/images/${imageSources[code.toString()]}`;
        }

        const imagePathTest = convertConditionCodeToImageSrc(data.current.condition.code);
        console.log(`imagePathTest:`, imagePathTest);

        setWeatherData({
          // ^ update the weatherData STATE Object with the following key/value pairs
          currentTemperature: `${data.current.temp_c}°C`,
          conditionText: data.current.condition.text,
          conditionCode : data.current.condition.code,
          localTime: data.location.localtime.split(" ")[1].padStart(5, "0"),
          city: data.location.name,
          country: data.location.country,
          image: data.current.condition.icon,
          // ^ this is using the image from the api fetch (a CDN URL)
          customImage: imagePathTest
          // ^ this is an attempt to use an animated svg from /public/images/
        });

        setError("");
        // ^ update the error STATE string
        
        document.getElementById("interaction-input").value = "";
        // ^ reset the input text field to empty, this is janky using DOM Manipulation here, is there a Reacty way to do this better?
        
      } catch (error) {
        setWeatherData({});
        // ^ if no City found, clear the weatherData STATE object
        setError("No City with that name found, try again...");
        // ^ update the error STATE string
        console.log("Error: ", error);
      }
    }

    getWeatherDataFromApi();
    // ^ immediately invoke the async function after definition

  }, [city]);
  // ^ city is the dependency that triggers the useEffect

  console.log(`weatherData STATE:`, weatherData);
  // ^ sanity check

  return (
    <div id="App">
      <div id="interaction">
        <input 
          type="text"
          id="interaction-input"
          placeholder="Enter a city..."
        />
        <button
          id="interaction-button"
          onClick={() => setCity(document.getElementById("interaction-input").value)}>
          Check The Weather
        </button>
        <div id="interaction-error">{error}</div>
      </div>
      <div id="display">
        <img id="image-path-test" src="/images/clear-day.svg" alt="" />
        {/* ^ as a test, this image loads when the path is hardcoded(?) but doesn't work below */}
        <div id="condition-image-container">
          <img
            id="condition-image"
            src={weatherData.image}
            // ^ this image works because it is direct from the API (a CDN url)
            // src={weatherData.customImage}
            // ^ this doesn't work, the image doesn't load
            alt={weatherData.conditionText}
          />
        </div>
        <span id="current-temperature-key">Current Temperature:</span>
        <span id="current-temperature-value">{weatherData.currentTemperature}</span>
        <span id="condition-key">Condition:</span>
        <span id="condition-value">{weatherData.conditionText}</span>
        <span id="time-key">Local Time:</span>
        <span id="time-value">{weatherData.localTime}</span>
        <span id="city-key">City:</span>
        <span id="city-value">{weatherData.city}</span>
        <span id="country-key">Country:</span>
        <span id="country-value">{weatherData.country}</span>
      </div>
    </div>
  )
}

export default App
