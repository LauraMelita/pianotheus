import React from 'react';
import classNames from 'classnames';

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
    <div className={classNames(className, 'badge')}>
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
