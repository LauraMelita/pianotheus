import React from 'react';

import { useThemeContext } from '../../../../context/ThemeContext';
import { useUserContext } from '../../../../context/AuthContext';

import {
  DropdownMenu,
  DropdownItem,
} from '../../../../components/UI/dropdown/Dropdown';
import UserBadge from '../badge/UserBadge';
import UserProfile from '../profile/UserProfile';
import ToggleThemeMode from '../../../themeMode/ToggleThemeMode';
import LogoutButton from '../../button/LogoutButton';

import {
  getRootStyleValue,
  parsePxToNumber,
} from '../../../../utils/formatting';

const UserMenu = () => {
  const { toggleTheme } = useThemeContext();
  const { signOutUser } = useUserContext();

  const NAVBAR_HEIGHT = parsePxToNumber(getRootStyleValue('--navbar-height'));
  const AUTH_BTN_HEIGHT = parsePxToNumber(
    getRootStyleValue('--auth-btn-height')
  );
  const distanceFromTrigger = (NAVBAR_HEIGHT - AUTH_BTN_HEIGHT) / 2;

  // prettier-ignore
  return (
    <DropdownMenu
      className='user__dropdown-menu'
      isModal={false}
      triggerComponent={<div className='user-button'><UserBadge /></div>}
      triggerOffset={distanceFromTrigger}
      align='end'
    >
      <DropdownItem disabled><UserProfile/></DropdownItem>
      <DropdownItem onSelect={toggleTheme}><ToggleThemeMode/></DropdownItem>
      <DropdownItem onSelect={signOutUser}><LogoutButton/></DropdownItem>
    </DropdownMenu>
  );
};

export default UserMenu;
