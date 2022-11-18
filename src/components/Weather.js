// Recieves all data from WeatherInformation component and display it here
export default function Weather({ location }) {
  return (
    <div className='weather-container'>
      <img
        className='weather-icon'
        src={`http://openweathermap.org/img/wn/${location.weather[0].icon}@2x.png`}
        alt='Weather icon'
        data-testid='weather-icon'
      />
      <p className='weather-desc' data-testid='weather-description'>
        {location.weather[0].description}
      </p>
      <p className='weather-temp' data-testid='weather-temp'>
        {Math.ceil(location.main.temp)} °C
      </p>
      <div className='location-container'>
        <p className='location' data-testid='city-name'>
          {location.name}
        </p>
        <img
          className='location-img'
          src={`https://flagcdn.com/w80/${location.sys.country.toLowerCase()}.png`}
          srcSet={`https://flagcdn.com/32x24/${location.sys.country.toLowerCase()}.png 2x,
    https://flagcdn.com/48x36/${location.sys.country.toLowerCase()}.png 3x`}
          data-testid='location-flag'
        />
      </div>
    </div>
  );
}
