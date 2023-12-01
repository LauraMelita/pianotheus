import React from 'react';
import { useNavigate } from 'react-router-dom';

import Icons from '../../../assets/icons/icons.svg';
import './MoveBackButton.scss';

const MoveBackButton = ({ btnText }) => {
  const navigate = useNavigate();

  const goToPrevPageHandler = () => {
    navigate(-1);
  };

  return (
    <button className='navigation-btn' onClick={goToPrevPageHandler}>
      <span className='navigation-btn__circle' aria-hidden='true'>
        <svg>
          <use href={`${Icons}#icon-chevron-left`} />
        </svg>
      </span>
    </button>
  );
};

export default MoveBackButton;
