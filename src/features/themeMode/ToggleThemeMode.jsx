import React, { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';

import Svg from '../../components/UI/svg/Svg';

const ToggleThemeMode = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className='toggle-theme-btn icon-btn'
      type='button'
      onClick={toggleTheme}
    >
      <Svg icon={theme === 'dark' ? 'sun' : 'moon'} />
    </button>
  );
};

export default ToggleThemeMode;
