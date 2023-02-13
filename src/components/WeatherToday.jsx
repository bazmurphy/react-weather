import WeatherImage from "./WeatherImage";
import reverseDate from "../helperFunctions/reverseDate";

const WeatherToday = ({currentData}) => {
  console.log(`WeatherToday function ran`);
  // console.log(`WeatherToday function currentData`, currentData);
  
  return (
    <div id="today-container">
      <div id="today-location">
        <span id="today-location-name">{currentData.location.name}</span>
        <span id="today-location-country">{currentData.location.country}</span>
      </div>
      <h1 id="today-title">Today</h1>
      <span id="today-date">{reverseDate(currentData.location.localtime.split(" ")[0])}</span>
      <div id="today-image-container">
        <WeatherImage condition={currentData.current.condition} isDay={Boolean(currentData.current.is_day)} id={"today-image"} />
      </div>
      <span id="today-current-temperature-key">Current Temperature:</span>
      <span id="today-current-temperature-value">{`${currentData.current.temp_c}°C`}</span>
      <span id="today-condition-key">Condition:</span>
      <span id="today-condition-value">{currentData.current.condition.text}</span>
      <span id="today-time-key">Local Time:</span>
      <span id="today-time-value">{currentData.location.localtime.split(" ")[1].padStart(5, "0")}</span>
    </div>
  )
}

export default WeatherToday;