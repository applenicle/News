import React from 'react';

export const useTheme = () => {
  const [theme, setTheme] = React.useState(localStorage.getItem('theme-color') || 'blue');
  React.useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme-color', theme);
  }, [theme]);
  return { theme, setTheme };
};
