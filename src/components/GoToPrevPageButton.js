import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/components/GoToPrevPageButton.scss';

const GoToPrevPageButton = ({ btnText }) => {
  const navigate = useNavigate();

  const goToPrevPageHandler = () => {
    navigate(-1);
  };

  return (
    <div className='navigation'>
      <button className='navigation-button' onClick={goToPrevPageHandler}>
        <span className='circle' aria-hidden='true'>
          <span className='icon arrow'></span>
        </span>
        <span className='button-text'>{btnText}</span>
      </button>
    </div>
  );
};

export default GoToPrevPageButton;
