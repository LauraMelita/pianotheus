import React from 'react';
import { useNavigate } from 'react-router-dom';

import Svg from '../svg/Svg';

import './MoveBackButton.scss';

const MoveBackButton = ({ btnText }) => {
  const navigate = useNavigate();

  const goToPrevPageHandler = () => {
    navigate(-1);
  };

  return (
    <button className='navigation-btn' onClick={goToPrevPageHandler}>
      <span className='navigation-btn__circle' aria-hidden='true'>
        <Svg icon='chevron-left' />
      </span>
    </button>
  );
};

export default MoveBackButton;
