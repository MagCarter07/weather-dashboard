function ForecastCard({ forecast }) {
  return (
    <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 w-[320px] shadow-xl">
      <h3 className="text-lg font-semibold mb-6">5-Day Forecast</h3>

      <div className="space-y-5">
        {forecast.map((day, index) => (
          <div key={index} className="flex justify-between items-center">
            <span>
              {new Date(day.Date).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </span>

            <span className="font-semibold">
              {day.Temperature.Maximum.Value}°
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ForecastCard;
