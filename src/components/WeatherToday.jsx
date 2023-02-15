import WeatherImage from "./WeatherImage";
import reverseDate from "../helperFunctions/reverseDate";

const WeatherToday = ({currentData, forecastData}) => {
  console.log(`WeatherToday ran`);
  console.log(`WeatherToday function currentData`, currentData);
  console.log(`WeatherToday function forecastData`, forecastData);
  
  return (
    <div id="today-container">
      <div id="today-title-date-time">
        <span id="today-title">Today</span>
        <span id="today-date">{reverseDate(currentData.location.localtime.split(" ")[0])}</span>
        <span id="today-time">{currentData.location.localtime.split(" ")[1].padStart(5, "0")}</span>
      </div>
      <div id="today-location">
        <span id="today-location-name">{currentData.location.name}</span>
        <span id="today-location-country">{currentData.location.country}</span>
      </div>
      <div id="today-image-container">
        <WeatherImage 
          condition={currentData.current.condition} 
          isDay={Boolean(currentData.current.is_day)} 
          id={"today-image"} 
        />
      </div>
      <div id="today-temperature-condition">
        <span id="today-current-temperature-key">Current Temperature:</span>
        <span id="today-current-temperature-value">{`${currentData.current.temp_c}°C`}</span>
        <span id="today-condition-key">Condition:</span>
        <span id="today-condition-value">{currentData.current.condition.text}</span>
      </div>
      <div id="today-average-min-max">
          <span id="today-average-key">Average:</span>
          <span id="today-average-value">{`${forecastData.forecast.forecastday[0].day.avgtemp_c}°C`}</span>
          <span id="today-minimum-key">Minimum:</span>
          <span id="today-minimum-value">{`${forecastData.forecast.forecastday[0].day.mintemp_c}°C`}</span>
          <span id="today-maximum-key">Maximum:</span>
          <span id="today-maximum-value">{`${forecastData.forecast.forecastday[0].day.maxtemp_c}°C`}</span>
      </div>
    </div>
  );
};

export default WeatherToday;