import React from 'react';

import { useThemeContext } from '../../context/ThemeContext';

import Button from '../../components/UI/button/Button';
import Svg from '../../components/UI/svg/Svg';

const ToggleThemeMode = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <Button className='toggle-theme-btn' variant='icon' onClick={toggleTheme}>
      <Svg icon={theme === 'dark' ? 'sun' : 'moon'} />
    </Button>
  );
};

export default ToggleThemeMode;
