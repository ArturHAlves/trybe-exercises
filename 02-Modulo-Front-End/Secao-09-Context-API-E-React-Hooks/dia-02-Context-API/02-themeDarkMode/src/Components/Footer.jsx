import { ThemeContext } from '../Context/ThemeContext';
import { useContext } from 'react';

function Footer() {
  const { color } = useContext(ThemeContext);

  return <footer>Tema Atual: {color} </footer>;
}

export default Footer;
