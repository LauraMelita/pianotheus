import React from 'react';
import { useNavigate } from 'react-router-dom';

import './MoveBackButton.scss';

const MoveBackButton = ({ btnText }) => {
  const navigate = useNavigate();

  const goToPrevPageHandler = () => {
    navigate(-1);
  };

  return (
    <button className='navigation-button' onClick={goToPrevPageHandler}>
      <span className='circle' aria-hidden='true'>
        <span className='icon arrow' />
      </span>
      <span className='button-text'>{btnText}</span>
    </button>
  );
};

export default MoveBackButton;
