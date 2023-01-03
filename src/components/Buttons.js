import React from 'react';

const Buttons = ({ data, theme, setTheme }) => {
  const onClickDarkTheme = () => {
    setTheme('dark');
  };
  const onClickLightTheme = () => {
    setTheme('light');
  };
  const onClickBlueTheme = () => {
    setTheme('blue');
  };

  return (
    <div className="button__options">
      <button className={theme === 'dark' ? `${theme} active` : 'dark'} onClick={onClickDarkTheme}>
        Темная тема
      </button>
      <button
        className={theme === 'light' ? `${theme} active` : 'light'}
        onClick={onClickLightTheme}>
        Светлая тема
      </button>
      <button className={theme === 'blue' ? `${theme} active` : 'blue'} onClick={onClickBlueTheme}>
        Синяя тема
      </button>
    </div>
  );
};

export default Buttons;
