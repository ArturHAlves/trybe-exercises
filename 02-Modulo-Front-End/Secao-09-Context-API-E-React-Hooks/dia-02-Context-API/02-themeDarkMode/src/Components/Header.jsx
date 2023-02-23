import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

function Header() {
  const { toogleColor, color } = useContext(ThemeContext);

  return (
    <header>
      <h1>Trybe</h1>
      <button onClick={toogleColor}>
        {color === 'dark' ? '☀️' : '🌒'}
      </button>
    </header>
  );
}

export default Header;
