import axios from "axios";

const API_KEY = import.meta.env.VITE_ACCUWEATHER_API_KEY;

export const fetchWeatherData = async (city) => {
  // Get Location Key
  const locationResponse = await axios.get(
    "https://dataservice.accuweather.com/locations/v1/cities/search",
    {
      params: { apikey: API_KEY, q: city },
    },
  );

  if (!locationResponse.data.length) {
    throw new Error("City not found");
  }

  const locationKey = locationResponse.data[0].Key;
  const cityName = locationResponse.data[0].LocalizedName;

  // Get Current Conditions
  const currentResponse = await axios.get(
    `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}`,
    {
      params: { apikey: API_KEY },
    },
  );

  // Get 5-Day Forecast
  const forecastResponse = await axios.get(
    `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}`,
    {
      params: { apikey: API_KEY, metric: true },
    },
  );

  return {
    city: cityName,
    current: currentResponse.data[0],
    forecast: forecastResponse.data.DailyForecasts,
  };
};
