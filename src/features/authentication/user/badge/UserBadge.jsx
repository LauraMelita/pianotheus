import React from 'react';

import { useUserContext } from '../../../../context/AuthContext';

import { BackgroundImage } from '../../../../components/UI/image/BackgroundImage';

import './UserBadge.scss';

const UserBadge = () => {
  const { user } = useUserContext();

  const Avatar = () => {
    return (
      <BackgroundImage
        className='user__badge avatar'
        url={user.photoURL}
        backgroundPosition='center'
      ></BackgroundImage>
    );
  };

  const Initials = () => {
    const userInitials = user.displayName[0].toUpperCase();

    return (
      <div className='user__badge initials'>
        <span>{userInitials}</span>
      </div>
    );
  };

  return user.photoURL ? <Avatar /> : <Initials />;
};

export default UserBadge;
