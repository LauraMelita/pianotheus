import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../../components/UI/button/Button';
import Svg from '../../../../components/UI/svg/Svg';

import './BackButton.scss';

const BackButton = () => {
  const navigate = useNavigate();

  const goToPrevPageHandler = () => {
    navigate(-1);
  };

  return (
    <Button
      variant='navigation'
      className='back__btn'
      onClick={goToPrevPageHandler}
    >
      <span className='circle' aria-hidden>
        <Svg icon='chevron-left' />
      </span>
    </Button>
  );
};

export default BackButton;
