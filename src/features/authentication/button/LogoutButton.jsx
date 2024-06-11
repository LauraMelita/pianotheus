import React from 'react';
import { toast } from 'react-toastify';

import { useUserContext } from '../../../context/AuthContext';

import Button from '../../../components/UI/button/Button';
import Svg from '../../../components/UI/svg/Svg';

const LogoutButton = () => {
  const { signOutUser } = useUserContext();

  const handleLogOut = async () => {
    try {
      await signOutUser();
    } catch (error) {
      toast.error(error, {
        hideProgressBar: true,
      });
    }
  };
  return (
    <Button className='logout-btn' variant='link' onClick={handleLogOut}>
      <Svg icon='logout' />
      Sign Out
    </Button>
  );
};

export default LogoutButton;
