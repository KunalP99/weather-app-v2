import Header from "./components/Header";
import { useState, useEffect } from "react";
import "./styles/css/main.css";
import WeatherInformation from "./components/WeatherInformation";

function App() {
  const [date, setDate] = useState(new Date());
  // Use this variable to compare times and change background colour
  const hours = date.getHours();

  // Bg colours for when time changes
  const morning =
    "linear-gradient(180deg, rgba(0, 179, 236, 0.55) 0%, #1A9EC8 58.56%)";
  const afternoon = "linear-gradient(180deg, #71AAFF 0%, #FFB951 100%)";
  const evening =
    "linear-gradient(180deg, rgba(254, 185, 83, 0.72) 0%, rgba(198, 0, 130, 0.44) 58.56%)";
  const night =
    "linear-gradient(180deg, rgba(10, 41, 109, 0.55) 0%, #374667 58.56%)";
  const midnight =
    "linear-gradient(180deg, rgba(42, 49, 64, 0.55) 0%, #484A4E 58.56%)";

  useEffect(() => {
    // Everytime one second passes, we set the date to a new date, updating the DOM
    let timer = setInterval(() => setDate(new Date()), 1000);

    // Changes background colour depending on the time (24 hour clock)
    if (hours >= 0 && hours < 6) {
      document.body.style.background = midnight;
      document.body.style.backgroundAttachment = "fixed";
    } else if (hours >= 6 && hours < 12) {
      document.body.style.background = morning;
      document.body.style.backgroundAttachment = "fixed";
    } else if (hours >= 12 && hours < 18) {
      document.body.style.background = afternoon;
      document.body.style.backgroundAttachment = "fixed";
    } else if (hours >= 18 && hours < 21) {
      document.body.style.background = evening;
      document.body.style.backgroundAttachment = "fixed";
    } else if (hours >= 21 && hours <= 23) {
      document.body.style.background = night;
      document.body.style.backgroundAttachment = "fixed";
    }

    return () => {
      clearInterval(timer);
    };
  }, [hours]);

  return (
    <div className='container'>
      <Header date={date} />
      <WeatherInformation />
    </div>
  );
}

export default App;
