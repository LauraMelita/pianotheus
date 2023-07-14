import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const GoToPrevPageButton = (props) => {
  const navigate = useNavigate();

  const goToPrevPageHandler = () => {
    navigate(-1);
  };

  return <Button onClick={goToPrevPageHandler}>{props.btnText}</Button>;
};

export default GoToPrevPageButton;
