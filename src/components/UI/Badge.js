import React from 'react';

import './Badge.scss';

const Badge = ({ image, text, height, width }) => {
  return (
    <div className='badge'>
      <div style={{ height: `${height}px`, width: `${width}px` }}>
        <img src={image} alt={`${text} badge`} />
      </div>
      <h3>{text}</h3>
    </div>
  );
};

export default Badge;
