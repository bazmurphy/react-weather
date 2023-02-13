const getWeatherDataFromApi = async (location) => {
  console.log(`getWeatherDataFromApi function ran`);
  try {
    const APIKEY = `51178a0aeac643629d5204449230702`;
    // ^ this should really be stored in an .env file
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${location}&aqi=no`);
    if (response.ok && response.status === 200 ) {
      const data = await response.json();
      console.log("getWeatherDataFromApi Result:", data);
      return data;
    }
    // HOW TO HANDLE ERROR IN A REACTY WAY...
  } catch (error) {
    console.log("getWeatherDataFromApi Error:", error);
  }
};

export default getWeatherDataFromApi;