const WeatherImage = ({condition, isDay, id}) => {
  console.log(`WeatherImage ran`);
  // console.log(`WeatherImage condition`, condition);
  // console.log(`WeatherImage isDay`, isDay);
  // console.log(`WeatherImage id`, id);
  
  let image = "";
  const dayOrNight = isDay ? "day" : "night";
  // console.log(`dayOrNight`, dayOrNight)
  switch(condition.code) {
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
    case 1063:
      image = `partly-cloudy-${dayOrNight}-drizzle.svg`;
      break;
    case 1135: 
      image = `fog-${dayOrNight}.svg`;
      break;
    case 1153:
      image = `drizzle.svg`;
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
    case 1213:
      image = `snow.svg`;
      break;
    case 1219:
      image = `snow.svg`;
      break;
    case 1225:
      image = `snow.svg`;
      break;
    case 1255:
      image = `snow.svg`;
      break;
    default:
      image = `not-available.svg`;
  }

  return (
      <img
        id={id}
        // src={condition.icon}
        // ^ static image from the API
        src={`images/${image}`}
        // ^ custom animated svg image
        alt={condition.text}
      />
  );
};

export default WeatherImage;