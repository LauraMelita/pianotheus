import React from 'react';

import { useThemeContext } from '../../context/ThemeContext';

import Button from '../../components/UI/button/Button';
import Svg from '../../components/UI/svg/Svg';

import { capitalize } from '../../utils/formatting';

const ToggleThemeMode = ({ onClick }) => {
  const { theme } = useThemeContext();

  const switchTheme = capitalize(theme === 'dark' ? 'light' : 'dark');

  return (
    <Button className='toggle-theme-btn' variant='link' onClick={onClick}>
      <Svg icon={theme === 'dark' ? 'sun' : 'moon'} />
      {switchTheme} Mode
    </Button>
  );
};

export default ToggleThemeMode;
