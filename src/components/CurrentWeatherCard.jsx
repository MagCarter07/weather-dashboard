import humidityIcon from "../assets/icons/humidity.png";
import windIcon from "../assets/icons/wind.png";
import highIcon from "../assets/icons/high-temperature.png";
import lowIcon from "../assets/icons/low-temperature.png";

function CurrentWeatherCard({ current }) {
  if (!current) return null;

  const temperature = Math.round(current?.Temperature?.Metric?.Value ?? 0);
  const weatherText = current?.WeatherText ?? "";
  const windSpeed = Math.round(current?.Wind?.Speed?.Metric?.Value ?? 0);
  const humidity = current?.RelativeHumidity ?? 0;

  const high = temperature + 2;
  const low = temperature - 2;

  return (
    <div className="w-full lg:w-[520px] bg-white/15 backdrop-blur-2xl rounded-3xl p-8 md:p-10 shadow-2xl border border-white/20">
      {/* Temperature */}
      <div>
        <h2 className="text-6xl md:text-7xl font-bold tracking-tight">
          {temperature}°
        </h2>
        <p className="text-lg md:text-xl opacity-80 mt-2 capitalize">
          {weatherText}
        </p>
      </div>

      <hr className="my-8 border-white/20" />

      {/* Weather Details */}
      <div className="grid grid-cols-2 gap-6">
        <Detail icon={humidityIcon} label="Humidity" value={`${humidity}%`} />
        <Detail icon={windIcon} label="Wind" value={`${windSpeed} km/h`} />
        <Detail icon={highIcon} label="High" value={`${high}°`} />
        <Detail icon={lowIcon} label="Low" value={`${low}°`} />
      </div>
    </div>
  );
}

function Detail({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4">
      <img src={icon} alt={label} className="w-6 h-6 object-contain" />
      <div>
        <p className="text-sm opacity-70">{label}</p>
        <p className="font-semibold text-lg">{value}</p>
      </div>
    </div>
  );
}

export default CurrentWeatherCard;
