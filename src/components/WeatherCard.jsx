import React from 'react'
import "./styles/WeatherCards.css"

const WeatherCard = ({weather, temps, isCelsius, changeUnitTemp}) => {
  return (
    <section className='weatherCard'>
      <h1 className='weatherCard__title'><i className="wi wi-night-alt-storm-showers"></i>Weather App</h1>
      <h2 className='weatherCard__place'>{weather?.name}, {weather?.sys.country} </h2>
      <div className='weatherCard__img'>
        { /*<img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" /> */ }
        <i className={`wi wi-owm-${weather?.weather[0].id }`}></i>
      </div>
      <h3 className='weatherCard__temp'>{isCelsius ? temps?.celsius + "°C": temps?.fahrenheit + "°F"} &deg;</h3>
      
      <ul className='weatherCard__list'>
        <li className='weatherCard__description'>
          {weather?.weather[0].main} , {weather?.weather[0].description}
          </li>
        <li>
          <span>Wind Speed: {weather?.wind.speed} m/sec</span>
        </li>
        <li>
          <span>Clouds: {weather?.clouds.all} %</span>
        </li>
        <li>
          <span>Preassure: {weather?.main.pressure} hPa</span>
        </li>
      </ul>
      <button className='weatherCard__btn' onClick={changeUnitTemp}>&deg; C  / &deg; F</button>
    </section>
  )
}

export default WeatherCard
