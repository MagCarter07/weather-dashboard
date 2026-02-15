import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import ErrorMessage from "../components/ErrorMessage";

function Home() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = import.meta.env.VITE_ACCUWEATHER_API_KEY;

  const fetchWeather = async (city) => {
    try {
      setLoading(true);
      setError("");
      setWeather(null);

      // STEP 1: Get Location Key
      const locationResponse = await axios.get(
        `https://dataservice.accuweather.com/locations/v1/cities/search`,
        {
          params: {
            apikey: API_KEY,
            q: city,
          },
        },
      );

      if (!locationResponse.data.length) {
        throw new Error("City not found");
      }

      const locationKey = locationResponse.data[0].Key;

      // STEP 2: Get Current Conditions
      const weatherResponse = await axios.get(
        `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}`,
        {
          params: {
            apikey: API_KEY,
          },
        },
      );

      setWeather({
        city: locationResponse.data[0].LocalizedName,
        temperature: weatherResponse.data[0].Temperature.Metric.Value,
        weatherText: weatherResponse.data[0].WeatherText,
        weatherIcon: weatherResponse.data[0].WeatherIcon,
        isDayTime: weatherResponse.data[0].IsDayTime,
      });
    } catch (err) {
      setError("Unable to fetch weather. Please check the city name.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather("London");
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8 text-white">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">
        Weather Dashboard
      </h1>

      <SearchBar onSearch={fetchWeather} />

      {loading && <p className="text-center mt-6">Loading...</p>}

      {error && <ErrorMessage message={error} />}

      {weather && !loading && <WeatherCard weather={weather} />}
    </div>
  );
}

export default Home;
