import React from 'react';

import { useThemeContext } from '../../context/ThemeContext';

import Svg from '../../components/UI/svg/Svg';

const ToggleThemeMode = () => {
  const { theme, toggleTheme } = useThemeContext();

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
