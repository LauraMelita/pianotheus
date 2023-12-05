import React from 'react';

import './Badge.scss';

const Badge = ({ width, height, image, title }) => {
  return (
    <div
      className='badge'
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <img src={image} alt={`${title} badge`} />
    </div>
  );
};

export default Badge;
