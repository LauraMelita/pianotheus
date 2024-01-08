import React, { forwardRef } from 'react';

import './Button.scss';

const Button = forwardRef(
  ({ className, href, variant, children, ...props }, ref) => {
    if (href)
      return (
        <a
          className={className ? `${className} ${variant}` : variant}
          href={href}
          {...props}
        >
          {children}
        </a>
      );

    return (
      <button
        className={className ? `${className} ${variant}` : variant}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button;
