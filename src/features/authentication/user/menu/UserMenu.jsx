import React from 'react';
import { useElementSize } from '@mantine/hooks';

import { useUserContext } from '../../../../context/AuthContext';

import {
  DropdownMenu,
  DropdownItem,
} from '../../../../components/UI/dropdown/Dropdown';
import UserBadge from '../badge/UserBadge';
import UserProfile from '../profile/UserProfile';
import LogoutButton from '../../button/LogoutButton';

import { parseCSSVariableToNumber } from '../../../../utils/formatting';
import { GLOBAL_STYLES } from '../../../../utils/constants';

const UserMenu = () => {
  const { ref: authBtnRef, height: authBtnHeight } = useElementSize();
  const { signOutUser } = useUserContext();

  const navbarHeight = parseCSSVariableToNumber(GLOBAL_STYLES.NAVBAR_HEIGHT);
  const triggerOffset = (navbarHeight - authBtnHeight) / 2;

  // prettier-ignore
  return (
    <DropdownMenu
      className='user__dropdown-menu'
      isModal={false}
      triggerComponent={<div ref={authBtnRef} className='user-button'><UserBadge /></div>}
      triggerOffset={triggerOffset}
      align='end'
    >
      <DropdownItem disabled><UserProfile/></DropdownItem>
      <DropdownItem onSelect={signOutUser}><LogoutButton/></DropdownItem>
    </DropdownMenu>
  );
};

export default UserMenu;
