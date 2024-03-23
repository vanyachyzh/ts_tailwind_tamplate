import { useEffect, useRef, useState } from 'react';

const localTheme = localStorage.getItem('theme');

const useTheme = (
  initialTheme: 'light' | 'dark',
): React.RefObject<HTMLButtonElement> => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [theme, setTheme] = useState(localTheme ?? initialTheme);

  const html = document.querySelector('html');

  useEffect(() => {
    if (!html) return;

    if (buttonRef.current) {
      buttonRef.current.addEventListener('click', toggleTheme);
    }

    html.classList.add(theme);

    return () => {
      if (buttonRef.current) {
        buttonRef.current.removeEventListener('click', toggleTheme);
      }
    };
  }, []);

  useEffect(() => {
    if (!html) return;

    html.classList.add(theme);
    html.classList.remove(theme === 'light' ? 'dark' : 'light');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return buttonRef;
};

export default useTheme;
