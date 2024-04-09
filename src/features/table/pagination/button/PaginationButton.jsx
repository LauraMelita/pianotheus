import React from 'react';

import Button from '../../../../components/UI/button/Button';
import Svg from '../../../../components/UI/svg/Svg';

const PaginationButton = ({ icon, onClick, disabled }) => {
  return (
    <Button className='pagination__btn' onClick={onClick} disabled={disabled}>
      <Svg icon={icon} />
    </Button>
  );
};

export default PaginationButton;
