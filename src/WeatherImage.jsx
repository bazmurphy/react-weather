const WeatherImage = (props) => {
  console.log(`WeatherImage function ran`);
  let image = "";
  const dayOrNight = props.weatherData.current.is_day ? "day" : "night";
  switch(props.weatherData.current.condition.code) {
    case 1000:
      image = `clear-${dayOrNight}.svg`;
      break;
    case 1003:
      image = `partly-cloudy-${dayOrNight}.svg`;
      break;
    case 1006:
      image = `cloudy.svg`;
      break;
    case 1009:
      image = `overcast-${dayOrNight}.svg`;
      break;
    case 1030:
      image = `mist.svg`;
      break;
    case 1135: 
      image = `fog-${dayOrNight}.svg`;
      break;
    case 1183:
      image = `rain.svg`;
      break;
    case 1189:
      image = `rain.svg`;
      break;
    case 1195:
      image = `rain.svg`;
      break;
    default:
      image = `not-available.svg`;
  }

  return (
    <div id="condition-image-container">
      <img
        id="condition-image"
        src={`images/${image}`}
        alt={props.weatherData.current.condition.text}
      />
    </div>
  );
};

export default WeatherImage;