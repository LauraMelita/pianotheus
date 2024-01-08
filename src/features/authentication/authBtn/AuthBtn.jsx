import React from 'react';

import { useAuthentication } from '../../../hooks/useAuthentication';

import Button from '../../../components/UI/button/Button';
import Svg from '../../../components/UI/svg/Svg';
import BackgroundImage from '../../../components/UI/image/BackgroundImage';

import './AuthBtn.scss';

const AuthBtn = () => {
  const userAvatar =
    'https://meragor.com/files/styles//ava_800_800_wm/aktery-dzhoker_joker-kino-lyudi-19297.jpg';

  const { isLoggedIn, toggleIsLoggedIn } = useAuthentication();

  const LoginBtn = () => {
    return (
      <Button variant='icon' onClick={toggleIsLoggedIn}>
        <Svg icon='user' />
      </Button>
    );
  };

  const UserAvatar = () => {
    return (
      <Button onClick={toggleIsLoggedIn}>
        <BackgroundImage className='auth-btn__user-avatar' url={userAvatar} />
      </Button>
    );
  };

  return (
    <div className='auth-btn'>{isLoggedIn ? <UserAvatar /> : <LoginBtn />}</div>
  );
};

export default AuthBtn;
