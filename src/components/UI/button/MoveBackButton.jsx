import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../button/Button';
import Svg from '../svg/Svg';

import './MoveBackButton.scss';

const MoveBackButton = () => {
  const navigate = useNavigate();

  const goToPrevPageHandler = () => {
    navigate(-1);
  };

  return (
    <Button className='navigation-btn' onClick={goToPrevPageHandler}>
      <span className='navigation-btn__circle' aria-hidden='true'>
        <Svg icon='chevron-left' />
      </span>
    </Button>
  );
};

export default MoveBackButton;
