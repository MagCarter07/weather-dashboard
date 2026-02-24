import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import CurrentWeatherCard from "../components/CurrentWeatherCard";
import ForecastCard from "../components/ForecastCard";
import ErrorMessage from "../components/ErrorMessage";
import { fetchWeatherData } from "../services/weatherService";

function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const loadWeather = async (city) => {
    try {
      setLoading(true);
      setError("");
      const data = await fetchWeatherData(city);
      setWeatherData(data);
    } catch {
      setError("Unable to fetch weather. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadWeather("London");
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1482192596544-9eb780fc7f66')",
      }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div className="relative z-10 px-12 py-10 text-white">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-semibold">{weatherData?.city}</h1>
            <p className="text-sm opacity-80">{new Date().toDateString()}</p>
          </div>

          <SearchBar onSearch={loadWeather} />
        </div>

        {loading && <p className="mt-6">Loading...</p>}
        {error && <ErrorMessage message={error} />}

        {weatherData && !loading && (
          <div className="mt-12 flex gap-10">
            <CurrentWeatherCard current={weatherData.current} />
            <ForecastCard forecast={weatherData.forecast} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
