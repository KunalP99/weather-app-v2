import { useState, useEffect } from "react";
import axios from "axios";
import Weather from "./Weather";

export default function WeatherInformation() {
  const api = "dd190da1025e91ba1feede45a0752686";

  const [location, setLocation] = useState(null);
  // Will check if API is still fetching. Once data is recieved, then set to false and load content
  const [isLoading, setIsLoading] = useState(true);

  let cityName = "nairobi";

  const fetchData = async () => {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api}&units=metric`
      )
      .then((res) => {
        console.log(res);
        setIsLoading(true);
        setLocation(res.data);
        setIsLoading(false);
      });
  };

  // Maybe put cityName inside dependacy array
  useEffect(() => {
    fetchData();
  }, [cityName]);

  return (
    <main>
      {!isLoading && (
        <div data-testid='weather-component'>
          <Weather location={location} />
        </div>
      )}

      <input className='search-box' type='text' placeholder='Type city name:' />
    </main>
  );
}
