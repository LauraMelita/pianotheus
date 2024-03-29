import React, { forwardRef } from 'react';

const Image = forwardRef(
  ({ className, srcSet, mediaQuery, src, alt, ...props }, ref) => {
    return (
      <img
        ref={ref}
        className={className && className}
        src={src}
        alt={alt}
        {...props}
      />
    );
  }
);

export default Image;
