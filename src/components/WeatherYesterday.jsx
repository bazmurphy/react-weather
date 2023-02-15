import WeatherImage from "./WeatherImage";
import reverseDate from "../helperFunctions/reverseDate";

const WeatherYesterday = ({historyData}) => {
  console.log(`WeatherYesterday ran`)
  // console.log(`WeatherYesterday historyData`, historyData);
  
  return (
    <div id="yesterday-container">
      <span id="yesterday-title">Yesterday</span>
      <span id="yesterday-date">{reverseDate(historyData.forecast.forecastday[0].date)}</span>
      <div id="yesterday-image-container">
        <WeatherImage 
          condition={historyData.forecast.forecastday[0].day.condition} 
          isDay={true} 
          id={"yesterday-image"}
        />
      </div>
      <span id="yesterday-average-temperature-key">Average:</span>
      <span id="yesterday-average-temperature-value">{`${historyData.forecast.forecastday[0].day.avgtemp_c}°C`}</span>
    </div>
  )
}

export default WeatherYesterday;