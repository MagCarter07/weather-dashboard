import humidityIcon from "../assets/icons/humidity.png";
import windIcon from "../assets/icons/wind.png";
import highIcon from "../assets/icons/high-temperature.png";
import lowIcon from "../assets/icons/low-temperature.png";

function CurrentWeatherCard({ current }) {
  // If no data yet → don't render
  if (!current) return null;

  const temperature = current?.Temperature?.Metric?.Value;
  const weatherText = current?.WeatherText;
  const windSpeed = current?.Wind?.Speed?.Metric?.Value;
  const humidity = current?.RelativeHumidity;

  return (
    <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-10 w-full lg:w-[500px] shadow-xl text-white">
      <div>
        <h2 className="text-7xl font-bold">{temperature ?? "--"}°</h2>
        <p className="text-xl mt-2">{weatherText ?? "Loading..."}</p>
      </div>

      <hr className="my-8 border-white/30" />

      <div className="grid grid-cols-2 gap-6">
        {/* Humidity */}
        <div className="flex items-center gap-4">
          <img src={humidityIcon} alt="" className="w-6 h-6" />
          <div>
            <p className="text-sm opacity-70">Humidity</p>
            <p className="font-semibold">{humidity ?? "--"}%</p>
          </div>
        </div>

        {/* Wind */}
        <div className="flex items-center gap-4">
          <img src={windIcon} alt="" className="w-6 h-6" />
          <div>
            <p className="text-sm opacity-70">Wind</p>
            <p className="font-semibold">{windSpeed ?? "--"} km/h</p>
          </div>
        </div>

        {/* High */}
        <div className="flex items-center gap-4">
          <img src={highIcon} alt="" className="w-6 h-6" />
          <div>
            <p className="text-sm opacity-70">High</p>
            <p className="font-semibold">
              {temperature ? temperature + 2 : "--"}°
            </p>
          </div>
        </div>

        {/* Low */}
        <div className="flex items-center gap-4">
          <img src={lowIcon} alt="" className="w-6 h-6" />
          <div>
            <p className="text-sm opacity-70">Low</p>
            <p className="font-semibold">
              {temperature ? temperature - 2 : "--"}°
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeatherCard;
