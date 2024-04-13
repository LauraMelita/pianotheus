import React from 'react';

import Image from '../image/Image';

const Badge = ({
  className,
  image,
  title,
  borderRadius,
  children,
  ...props
}) => {
  return (
    <div className={className ? `${className} badge` : 'badge'}>
      <Image
        src={image}
        alt={`${title} badge`}
        style={{ borderRadius }}
        {...props}
      />
      {children}
    </div>
  );
};

export default Badge;
