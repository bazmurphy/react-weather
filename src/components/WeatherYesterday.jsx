import WeatherImage from "./WeatherImage";
import reverseDate from "../helperFunctions/reverseDate";

const WeatherYesterday = ({historyData}) => {
  console.log(`Yesterday ran`)
  // console.log(`Yesterday historyData`, historyData);
  
  return (
    <div id="yesterday-container">
      <h2 id="yesterday-title">Yesterday</h2>
      <span id="yesterday-date">{reverseDate(historyData.forecast.forecastday[0].date)}</span>
      <div id="yesterday-image-container">
        <WeatherImage condition={historyData.forecast.forecastday[0].day.condition} isDay={true} id={"yesterday-image"}/>
      </div>
      <span id="yesterday-average-temperature-key">Average:</span>
      <span id="yesterday-average-temperature-value">{`${historyData.forecast.forecastday[0].day.avgtemp_c}°C`}</span>
    </div>
  )
}

export default WeatherYesterday;