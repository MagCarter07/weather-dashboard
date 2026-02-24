function CurrentWeatherCard({ current }) {
  const iconUrl = `https://developer.accuweather.com/sites/default/files/${current.WeatherIcon.toString().padStart(
    2,
    "0",
  )}-s.png`;

  return (
    <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-10 w-[500px] shadow-xl">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-7xl font-bold">
            {current.Temperature.Metric.Value}°
          </h2>
          <p className="text-xl mt-2">{current.WeatherText}</p>
        </div>

        <img src={iconUrl} alt="" className="w-20" />
      </div>

      <hr className="my-8 border-white/30" />

      <div className="flex justify-between text-center">
        <div>
          <p className="text-sm opacity-70">HUMIDITY</p>
          <p className="text-lg font-semibold">
            {current.RelativeHumidity ?? "--"}%
          </p>
        </div>

        <div>
          <p className="text-sm opacity-70">WIND</p>
          <p className="text-lg font-semibold">
            {current.Wind.Speed.Metric.Value} km/h
          </p>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeatherCard;
