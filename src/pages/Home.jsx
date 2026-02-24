import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchWeatherData } from "../services/weatherService";
import SearchBar from "../components/SearchBar";
import CurrentWeatherCard from "../components/CurrentWeatherCard";
import ForecastCard from "../components/ForecastCard";
import ErrorMessage from "../components/ErrorMessage";
import SkeletonLoader from "../components/SkeletonLoader";

import snowyBg from "../assets/backgrounds/snowy-mountains.jpg";
import sunnyBg from "../assets/backgrounds/sunny.jpg";
import rainyBg from "../assets/backgrounds/rainy.jpg";
import cloudyBg from "../assets/backgrounds/cloudy.jpg";
import nightBg from "../assets/backgrounds/night.jpg";

function Home() {
  const { cityName } = useParams();

  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const loadWeather = async (city) => {
    try {
      setLoading(true);
      setError("");
      setWeatherData(null);

      const data = await fetchWeatherData(city);

      // Safety check
      if (!data || !data.current) {
        throw new Error("Invalid data");
      }

      setWeatherData(data);
    } catch {
      setError("City not found.");
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadWeather(cityName || "London");
  }, [cityName]);

  const getBackground = () => {
    if (!weatherData?.current) return snowyBg;

    const text = weatherData.current?.WeatherText?.toLowerCase() || "";

    if (weatherData.current?.IsDayTime === false) return nightBg;
    if (text.includes("rain")) return rainyBg;
    if (text.includes("snow")) return snowyBg;
    if (text.includes("cloud")) return cloudyBg;
    if (text.includes("sun")) return sunnyBg;

    return snowyBg;
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative transition-all duration-700"
      style={{ backgroundImage: `url(${getBackground()})` }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div className="relative z-10 px-6 sm:px-12 py-10 text-white">
        <div className="flex flex-col sm:flex-row justify-between gap-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-semibold">
              {weatherData?.city || cityName || "London"}
            </h1>
            <p className="opacity-80">{new Date().toDateString()}</p>
          </div>

          <SearchBar />
        </div>

        {loading && <SkeletonLoader />}

        {error && !loading && (
          <div className="mt-10">
            <ErrorMessage message={error} />
          </div>
        )}

        {weatherData && !loading && !error && (
          <div className="mt-12 flex flex-col lg:flex-row gap-8">
            <CurrentWeatherCard current={weatherData.current} />
            <ForecastCard forecast={weatherData.forecast} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
