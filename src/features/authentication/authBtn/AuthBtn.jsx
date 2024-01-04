import React from 'react';

import { useAuthentication } from '../../../hooks/useAuthentication';

import Svg from '../../../components/UI/svg/Svg';

import './AuthBtn.scss';

const AuthBtn = () => {
  const userAvatar =
    'https://meragor.com/files/styles//ava_800_800_wm/aktery-dzhoker_joker-kino-lyudi-19297.jpg';

  const { isLoggedIn, toggleIsLoggedIn } = useAuthentication();

  const LoginBtn = () => {
    return (
      <button className='icon-btn' onClick={toggleIsLoggedIn}>
        <Svg icon='user' />
      </button>
    );
  };

  const UserAvatar = () => {
    return (
      <button onClick={toggleIsLoggedIn}>
        <div
          className='auth-btn__user-avatar'
          style={{
            backgroundImage: `url(${userAvatar})`,
          }}
        />
      </button>
    );
  };

  return (
    <div className='auth-btn'>{isLoggedIn ? <UserAvatar /> : <LoginBtn />}</div>
  );
};

export default AuthBtn;
