import { useState, useEffect } from "react";
import Weather from "./Weather";

export default function WeatherInformation() {
  const api = "dd190da1025e91ba1feede45a0752686";

  const [location, setLocation] = useState({});
  // Will check if API is still fetching. Once data is recieved, then set to false and load content
  const [isLoading, setIsLoading] = useState(true);
  let cityName = "Seoul";

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        setLocation(data);
        setIsLoading(false);
      });
  }, [cityName]);

  {
    /* Add bottom card here with the extra information and pass down data as prop*/
  }
  return <main>{!isLoading && <Weather location={location} />}</main>;
}
