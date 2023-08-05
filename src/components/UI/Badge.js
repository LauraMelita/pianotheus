import React from 'react';

import './Badge.scss';

const Badge = ({ image, text }) => {
  return (
    <div className='badge'>
      <div>
        <img src={image} alt={`${text} badge`} />
      </div>
      <h3>{text}</h3>
    </div>
  );
};

export default Badge;
