import React from 'react';
import { ToastContainer as Toast } from 'react-toastify';

import Button from '../button/Button';
import Svg from '../svg/Svg';

import './Toaster.scss';

const closeButton = () => {
  return (
    <Button className='toaster__close-btn' variant='icon'>
      <Svg icon='close' style={{ width: 20, height: 20 }} />
    </Button>
  );
};

const Toaster = () => {
  return (
    <Toast
      theme='dark'
      position='bottom-right'
      closeButton={closeButton}
      icon={false}
    />
  );
};

export default Toaster;
