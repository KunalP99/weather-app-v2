import Wind from "../images/Weather/wind.svg";
import Humidity from "../images/Weather/humidity.svg";
import FeelsLike from "../images/Weather/feelsLike.svg";
import Cloudiness from "../images/Weather/cloud.svg";
import Pressure from "../images/Weather/pressure.png";

export default function MoreWeatherInformation({ location }) {
  return (
    <div className='more-weather-info-container'>
      <div className='wind-speed-container info-container'>
        <p>Wind Speed</p>
        <img src={Wind} alt='Wind Speed' />
        <p>{`${location.wind.speed}m/s`}</p>
      </div>
      <div className='humidity-container info-container'>
        <p>Humidity</p>
        <img src={Humidity} alt='Humidity' />
        <p>{`${location.main.humidity}%`}</p>
      </div>
      <div className='feels-like-container info-container'>
        <p>Feels Like</p>
        <img src={FeelsLike} alt='Feels like temperature' />
        <p>{`${Math.ceil(location.main.feels_like)} °C`}</p>
      </div>
      <div className='cloudiness-container info-container'>
        <p>Cloudiness</p>
        <img src={Cloudiness} alt='Cloudiness' />
        <p>{`${location.clouds.all}%`}</p>
      </div>
      <div className='rain-container info-container'>
        <p>Pressure</p>
        <img src={Pressure} alt='Cloudiness' />
        <p>{`${location.main.pressure}hPa`}</p>
      </div>
    </div>
  );
}
