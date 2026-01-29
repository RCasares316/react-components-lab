import "./WeatherForecast.css";

const WeatherApp = ({ weatherForecast }) => {
  return (
    <div className="weather">
      <h2>{weatherForecast.day}</h2>
      <img src={weatherForecast.img} alt={weatherForecast.alt} />
      <p>
        <span>conditions:{weatherForecast.conditions} </span>current weather
        conditions
      </p>
      <p>
        <span>time:{weatherForecast.time} </span>time of day
      </p>
    </div>
  );
};

export default WeatherApp;
