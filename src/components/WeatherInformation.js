import { useState, useEffect } from "react";
import axios from "axios";
import Weather from "./Weather";

export default function WeatherInformation() {
  const [location, setLocation] = useState(null);
  // Will check if API is still fetching. Once data is recieved, then set to false and load content
  const [isLoading, setIsLoading] = useState(true);
  const [city, setCity] = useState("London");
  const [error, setError] = useState(null);

  const api = "dd190da1025e91ba1feede45a0752686";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;

  const fetchData = async () => {
    await axios
      .get(url)
      .then((res) => {
        setIsLoading(true);
        setLocation(res.data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  // Maybe put cityName inside dependacy array
  useEffect(() => {
    fetchData();
  }, [city]);

  const onClickLocation = (e) => {
    e.preventDefault();
    let inputVal = document.querySelector(".search-box").value;
    setCity(inputVal);
  };

  return (
    <main>
      {!isLoading && (
        <div data-testid='weather-component'>
          <Weather location={location} />
        </div>
      )}
      <form>
        <input
          className='search-box'
          type='text'
          placeholder='Type city name:'
        />
        <button onClick={onClickLocation} type='submit'>
          Search
        </button>
      </form>

      {error && (
        <div className='error-code'>{error} - Try type another city name!</div>
      )}
    </main>
  );
}
