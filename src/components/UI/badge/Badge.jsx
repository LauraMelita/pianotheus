import React from 'react';

import './Badge.scss';

const Badge = ({ image, text, height, width }) => {
  return (
    <div className='badge'>
      <div style={{ height: `${height}px`, width: `${width}px` }}>
        <img src={image} alt={`${text} badge`} />
      </div>
      <span>{text}</span>
    </div>
  );
};

export default Badge;
