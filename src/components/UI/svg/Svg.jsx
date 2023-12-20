import React from 'react';

import Icons from '../../../assets/icons/icons.svg';

const Svg = ({ icon, onClick }) => {
  return (
    <svg className={`icon__${icon}`} onClick={onClick}>
      <use href={`${Icons}#icon-${icon}`} />
    </svg>
  );
};

export default Svg;
