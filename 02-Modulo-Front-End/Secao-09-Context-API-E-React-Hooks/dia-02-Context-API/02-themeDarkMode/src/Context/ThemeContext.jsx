import { useState } from 'react';
import { createContext } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  const toogleColor = () => {
    const toogle = theme === 'dark' ? 'light' : 'dark';

    setTheme(toogle);
  };

  return (
    <ThemeContext.Provider value={{ color: theme, toogleColor }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};

