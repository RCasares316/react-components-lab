import "./WeatherForecast.css";

const WeatherApp = ({ weatherForecast }) => {
  return (
    <div className="weather">
      <h2>{weatherForecast.day}</h2>
      <img src={weatherForecast.img} alt={weatherForecast.imgAlt} />
      <p>
        <span>conditions: </span> {weatherForecast.conditions}
      </p>
      <p>
        <span>time: </span>{weatherForecast.time}
      </p>
    </div>
  );
};

export default WeatherApp;
