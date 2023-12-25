import React from 'react';

import Icons from '../../../assets/icons/icons.svg';

const Svg = ({ icon, width, height, onClick }) => {
  return (
    <svg
      className={`icon__${icon}`}
      width={width}
      height={height}
      onClick={onClick}
    >
      <use href={`${Icons}#icon-${icon}`} />
    </svg>
  );
};

export default Svg;
