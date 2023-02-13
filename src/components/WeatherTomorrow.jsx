import WeatherImage from "./WeatherImage";
import reverseDate from "../helperFunctions/reverseDate";

const WeatherTomorrow = ({forecastData}) => {
  console.log(`Tomorrow ran`)
  // console.log(`Tomorrow forecastData`, forecastData);
  
  return (
    <div id="tomorrow-container">
      <h2 id="tomorrow-title">Tomorrow</h2>
      <span id="tomorrow-date">{reverseDate(forecastData.forecast.forecastday[1].date)}</span>
      <div id="tomorrow-image-container">
        <WeatherImage condition={forecastData.forecast.forecastday[1].day.condition} isDay={true}  id={"tomorrow-image"}/>
      </div>
      <span id="tomorrow-average-temperature-key">Average:</span>
      <span id="tomorrow-average-temperature-value">{`${forecastData.forecast.forecastday[1].day.avgtemp_c}°C`}</span>
    </div>
  )
}

export default WeatherTomorrow;