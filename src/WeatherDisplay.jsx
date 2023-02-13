import WeatherImage from "./WeatherImage";

const WeatherDisplay = (props) => {
  console.log(`WeatherDisplay function ran`);
  return (
    <div id="weather-display">
      <WeatherImage weatherData={props.weatherData} />
      <span id="current-temperature-key">Current Temperature:</span>
      <span id="current-temperature-value">{`${props.weatherData.current.temp_c}°C`}</span>
      <span id="condition-key">Condition:</span>
      <span id="condition-value">{props.weatherData.current.condition.text}</span>
      <span id="time-key">Local Time:</span>
      <span id="time-value">{props.weatherData.location.localtime.split(" ")[1].padStart(5, "0")}</span>
      <span id="city-key">City:</span>
      <span id="city-value">{props.weatherData.location.name}</span>
      <span id="country-key">Country:</span>
      <span id="country-value">{props.weatherData.location.country}</span>
    </div>
  );
};

export default WeatherDisplay;