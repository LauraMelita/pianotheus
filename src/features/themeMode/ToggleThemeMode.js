import React, { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';

import Icons from '../../assets/icons.svg';
import './ToggleThemeMode.scss';

const ToggleThemeMode = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className='toggle-theme-btn icon-btn'
      type='button'
      onClick={toggleTheme}
    >
      <svg>
        {theme === 'light' ? (
          <use href={`${Icons}#icon-sun`} />
        ) : (
          <use href={`${Icons}#icon-moon`} />
        )}
      </svg>
    </button>
  );
};

export default ToggleThemeMode;
