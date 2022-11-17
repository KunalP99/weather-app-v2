import Header from "./components/Header";
import { useState, useEffect } from "react";
import "./styles/css/main.css";
import WeatherInformation from "./components/WeatherInformation";

function App() {
  const [date, setDate] = useState(new Date());

  // Use this variable to compare times and change background colour
  const hours = date.getHours();

  useEffect(() => {
    // Everytime one second passes, we set the date to a new date, updating the DOM
    let timer = setInterval(() => setDate(new Date()), 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className='container'>
      <Header date={date} />
      <WeatherInformation />
    </div>
  );
}

export default App;
