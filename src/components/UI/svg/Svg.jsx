import React from 'react';

import Icons from '../../../assets/icons/icons.svg';
import './Svg.scss';

const Svg = ({ variant, icon, ...props }) => {
  return (
    <svg
      className={variant ? `icon__${icon} ${variant}` : `icon__${icon}`}
      {...props}
    >
      <use href={`${Icons}#icon-${icon}`} />
    </svg>
  );
};

export default Svg;
