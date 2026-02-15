function WeatherCard({ weather }) {
  const { city, temperature, weatherText, weatherIcon } = weather;

  const iconUrl = `https://developer.accuweather.com/sites/default/files/${weatherIcon
    .toString()
    .padStart(2, "0")}-s.png`;

  return (
    <div className="mt-8 bg-white text-black rounded-lg shadow-lg p-6 text-center">
      <h2 className="text-2xl font-semibold mb-4">{city}</h2>

      <img src={iconUrl} alt={weatherText} className="mx-auto mb-4" />

      <p className="text-3xl font-bold">{temperature}°C</p>
      <p className="mt-2 capitalize">{weatherText}</p>
    </div>
  );
}

export default WeatherCard;
