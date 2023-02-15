import WeatherToday from "./WeatherToday";
import WeatherYesterday from "./WeatherYesterday";
import WeatherTomorrow from "./WeatherTomorrow";

const WeatherDisplay = ({currentData, forecastData, historyData}) => {
  console.log(`WeatherDisplay ran`);
  console.log(`WeatherDisplay currentData`, currentData);
  console.log(`WeatherDisplay forecastData`, forecastData);
  console.log(`WeatherDisplay historyData`, historyData);
  
  return (
    <div id="weather-display">
      <WeatherToday currentData={currentData} forecastData={forecastData}/>
      <WeatherYesterday historyData={historyData} />
      <WeatherTomorrow forecastData={forecastData} />
    </div>
  );
};

export default WeatherDisplay;