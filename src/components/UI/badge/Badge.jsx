import React from 'react';

import Image from '../image/Image';

import './Badge.scss';

const Badge = ({ className, image, title, children, ...props }) => {
  return (
    <div className={className ? `${className} badge` : 'badge'}>
      <Image src={image} alt={`${title} badge`} {...props} />
      {children}
    </div>
  );
};

export default Badge;
