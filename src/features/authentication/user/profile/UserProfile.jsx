import React from 'react';

import { useUserContext } from '../../../../context/AuthContext';

import UserBadge from '../badge/UserBadge';

import './UserProfile.scss';

const UserProfile = () => {
  const { user } = useUserContext();

  return (
    <div className='user__profile'>
      <UserBadge />
      <div>
        <span className='user__name'>{user.displayName}</span>
        <span className='user__email'>{user.email}</span>
      </div>
    </div>
  );
};

export default UserProfile;
