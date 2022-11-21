export default function Header(props) {
  return (
    <header>
      <div>
        <p className='local-time-text'>My local time:</p>
        <p className='time'>{props.date.toLocaleTimeString()}</p>
      </div>
      <p className='date'>{props.date.toLocaleDateString()}</p>
    </header>
  );
}
