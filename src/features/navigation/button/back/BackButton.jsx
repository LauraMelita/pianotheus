import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../../components/UI/button/Button';
import Svg from '../../../../components/UI/svg/Svg';

const BackButton = () => {
  const navigate = useNavigate();

  const goToPrevPageHandler = () => {
    navigate(-1);
  };

  return (
    <Button variant='primary' onClick={goToPrevPageHandler}>
      <Svg icon='chevron-left' width={18} height={18} />
    </Button>
  );
};

export default BackButton;
