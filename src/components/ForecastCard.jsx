import sunnyIcon from "../assets/weather/sun.png";
import rainyIcon from "../assets/weather/rain.png";
import cloudyIcon from "../assets/weather/cloud.png";

function ForecastCard({ forecast }) {
  if (!forecast) return null;

  const getIcon = (text) => {
    const lower = text.toLowerCase();
    if (lower.includes("rain")) return rainyIcon;
    if (lower.includes("cloud")) return cloudyIcon;
    if (lower.includes("sun")) return sunnyIcon;
    return cloudyIcon;
  };

  return (
    <div className="w-full lg:w-[350px] bg-white/15 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white/20">
      <h3 className="text-lg font-semibold mb-6">5-Day Forecast</h3>

      <div className="space-y-6">
        {forecast.map((day, index) => {
          const weekday = new Date(day.Date).toLocaleDateString("en-US", {
            weekday: "short",
          });

          const weatherText = day.Day.IconPhrase;
          const temperature = Math.round(day.Temperature.Maximum.Value);

          return (
            <div key={index} className="flex items-center justify-between">
              <span className="w-12">{weekday}</span>

              <div className="flex items-center gap-3 flex-1 justify-center">
                <img
                  src={getIcon(weatherText)}
                  alt={weatherText}
                  className="w-6 h-6 object-contain"
                />
                <span className="text-sm opacity-80 capitalize">
                  {weatherText}
                </span>
              </div>

              <span className="font-semibold w-10 text-right">
                {temperature}°
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ForecastCard;
