import { useState, useEffect } from "react";
import axios from "axios";
import Search from "../images/search.svg";
import Weather from "./Weather";
import MoreWeatherInformation from "./MoreWeatherInformation";

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

  // Every time city is updated, fetchData will run and in turn, updates everything on the screen
  useEffect(() => {
    fetchData();
  }, [city]);

  const onClickLocation = (e) => {
    e.preventDefault();
    const form = document.getElementById("form");

    let inputVal = document.querySelector(".search-box").value;
    setCity(inputVal);

    // Clears input value
    form.reset();
  };

  return (
    <main>
      {!isLoading && (
        <div data-testid='weather-component'>
          <Weather location={location} />
        </div>
      )}
      <form id='form'>
        <div className='search-box-container'>
          <input
            className='search-box'
            type='text'
            placeholder='Type city name:'
          />
          <button onClick={onClickLocation} type='submit'>
            <img className='search-img' src={Search} alt='Search button' />
          </button>
        </div>
      </form>
      {error && (
        <div className='error-code'>{error} - Try type another city name!</div>
      )}
      {!isLoading && (
        <div>
          <MoreWeatherInformation location={location} />
        </div>
      )}
    </main>
  );
}
