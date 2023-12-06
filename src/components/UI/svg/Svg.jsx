import React from 'react';

import Icons from '../../../assets/icons/icons.svg';

const Svg = ({ className, icon, onClick }) => {
  return (
    <svg className={className} onClick={onClick}>
      <use href={`${Icons}#icon-${icon}`} />
    </svg>
  );
};

export default Svg;
