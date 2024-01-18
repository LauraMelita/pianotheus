import React from 'react';

import { useUserContext } from '../../../context/AuthContext';

import DropdownMenu from '../../../components/UI/dropdownMenu/DropdownMenu';
import BackgroundImage from '../../../components/UI/image/BackgroundImage';
import LoginBtn from '../loginBtn/LoginBtn';
import LogoutBtn from '../LogoutBtn/LogoutBtn';

import './UserAuth.scss';

const UserAuth = () => {
  const { user } = useUserContext();

  const UserProfile = () => {
    const Avatar = () => {
      return (
        <BackgroundImage
          className='auth-btn__user-avatar'
          url={user.photoURL}
        />
      );
    };

    const FallbackAvatar = () => {
      const userInitials = user.displayName[0].toUpperCase();

      return (
        <div className='auth-btn__fallback-avatar'>
          <span>{userInitials}</span>
        </div>
      );
    };

    return (
      <DropdownMenu
        trigger={<div>{user.photoURL ? <Avatar /> : <FallbackAvatar />}</div>}
        triggerOffset={25}
      >
        <LogoutBtn />
      </DropdownMenu>
    );
  };

  return (
    <div className='auth-btn'>{user ? <UserProfile /> : <LoginBtn />}</div>
  );
};

export default UserAuth;
