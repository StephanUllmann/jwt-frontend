import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext('light');

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  const themeToggle = () => {
    if (theme === 'light') setTheme('dark');
    else setTheme('light');
  };

  return <ThemeContext.Provider value={{ theme, themeToggle }}>{children}</ThemeContext.Provider>;
}
