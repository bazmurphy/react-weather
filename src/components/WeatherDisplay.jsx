import WeatherToday from "./WeatherToday";
import WeatherYesterday from "./WeatherYesterday";
import WeatherTomorrow from "./WeatherTomorrow";

const WeatherDisplay = ({currentData, historyData, forecastData}) => {
  console.log(`WeatherDisplay ran`);
  console.log(`WeatherDisplay currentData`, currentData);
  console.log(`WeatherDisplay historyData`, historyData);
  console.log(`WeatherDisplay forecastData`, forecastData);
  
  return (
    <div id="weather-display">
      <WeatherToday currentData={currentData}/>
      <WeatherYesterday historyData={historyData} />
      <WeatherTomorrow forecastData={forecastData} />
    </div>
  );
};

export default WeatherDisplay;