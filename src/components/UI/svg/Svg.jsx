import React from 'react';
import classNames from 'classnames';

import Icons from '../../../assets/icons/icons.svg';
import './Svg.scss';

const Svg = ({ variant, icon, ...props }) => {
  const classes = classNames(`icon__${icon}`, variant);

  return (
    <svg className={classes} {...props}>
      <use href={`${Icons}#icon-${icon}`} />
    </svg>
  );
};

export default Svg;
