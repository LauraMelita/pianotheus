import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../../components/UI/button/Button';
import Svg from '../../../components/UI/svg/Svg';

const LoginBtn = () => {
  return (
    <Button className='login-btn' variant='icon'>
      <Link to='sign-in'>
        <Svg icon='user' />
      </Link>
    </Button>
  );
};

export default LoginBtn;
