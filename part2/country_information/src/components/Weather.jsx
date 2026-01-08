const Weather = ({weather}) => {
    if (!weather) {
      return null; // or return <div>Loading weather...</div>
    }
    return (
    <div>
        <p>Temperature {(weather.main.temp - 273.15).toFixed(2)} Celcius</p>
        <img 
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="weather icon"
        />
        <p>Wind {weather.wind.speed} m/s</p>
    </div>
    )
}

export default Weather