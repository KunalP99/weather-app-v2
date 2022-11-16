export default function Weather() {
  return (
    <main>
      <div className='weather-container'>
        <img src='' alt='Weather icon' />
        <p className='weather-desc'>Cloudy</p>
        <p className='weather-temp'>18 °C</p>
        <div className='location-container'>
          <p className='location'>London</p>
          <img
            className='location-img'
            src='https://flagcdn.com/w80/gb.png'
            srcset='https://flagcdn.com/w160/gb.png 2x'
          />
        </div>
      </div>
    </main>
  );
}
