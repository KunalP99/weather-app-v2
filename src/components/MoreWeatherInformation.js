import Wind from "../images/Weather/wind.svg";
import Humidity from "../images/Weather/humidity.svg";
import FeelsLike from "../images/Weather/feelsLike.svg";
import Cloudiness from "../images/Weather/cloud.svg";
import Rain from "../images/Weather/rain.svg";

export default function MoreWeatherInformation() {
  return (
    <div className='more-weather-info-container'>
      <div className='wind-speed-container info-container'>
        <p>Wind Speed</p>
        <img src={Wind} alt='Wind Speed' />
        <p>6.69m/s</p>
      </div>
      <div className='humidity-container info-container'>
        <p>Humidity</p>
        <img src={Humidity} alt='Humidity' />
        <p>80%</p>
      </div>
      <div className='feels-like-container info-container'>
        <p>Feels Like</p>
        <img src={FeelsLike} alt='Feels like temperature' />
        <p>17.3 °C</p>
      </div>
      <div className='cloudiness-container info-container'>
        <p>Cloudiness</p>
        <img src={Cloudiness} alt='Cloudiness' />
        <p>65%</p>
      </div>
      <div className='rain-container info-container'>
        <p>Rain Past 1h</p>
        <img src={Rain} alt='Cloudiness' />
        <p>3.16mm</p>
      </div>
    </div>
  );
}
