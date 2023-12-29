import React from 'react';

import './Badge.scss';

const Badge = ({ width, height, image, title, children }) => {
  return (
    <div className='badge'>
      <img
        src={image}
        alt={`${title} badge`}
        style={{ width: `${width}px`, height: `${height}px` }}
      />
      {children}
    </div>
  );
};

export default Badge;
