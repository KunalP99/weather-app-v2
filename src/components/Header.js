export default function Header(props) {
  return (
    <header>
      <p className='time'>{props.date.toLocaleTimeString()}</p>
      <p className='date'>{props.date.toLocaleDateString()}</p>
    </header>
  );
}
