import { useEffect, useState } from "react";

export default function Header() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    // Everytime one second passes, we set the date to a new date, updating the DOM
    let timer = setInterval(() => setDate(new Date()), 1000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <header>
      <p className='time'>{date.toLocaleTimeString()}</p>
      <p className='date'>{date.toLocaleDateString()}</p>
    </header>
  );
}
