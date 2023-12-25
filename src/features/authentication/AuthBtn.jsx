import React from 'react';

import { useAuthentication } from '../../hooks/useAuthentication';

import Svg from '../../components/UI/svg/Svg';
import Tooltip from '../../components/UI/tooltip/Tooltip';

import './AuthBtn.scss';

const AuthBtn = () => {
  const userAvatar =
    'https://meragor.com/files/styles//ava_800_800_wm/aktery-dzhoker_joker-kino-lyudi-19297.jpg';

  const { isLoggedIn, toggleIsLoggedIn } = useAuthentication();

  const LoginBtn = () => {
    return (
      <Tooltip content='Log in' place='bottom' offset={10}>
        <button className='auth__btn-login icon-btn' onClick={toggleIsLoggedIn}>
          <Svg icon='user' />
        </button>
      </Tooltip>
    );
  };

  const UserAvatar = () => {
    return (
      <Tooltip content='Log out' place='bottom' offset={10}>
        <button className='auth__btn-user' onClick={toggleIsLoggedIn}>
          <div
            className='auth__user-avatar'
            style={{
              backgroundImage: `url(${userAvatar})`,
            }}
          />
        </button>
      </Tooltip>
    );
  };

  return (
    <div className='auth'>{isLoggedIn ? <UserAvatar /> : <LoginBtn />}</div>
  );
};

export default AuthBtn;
