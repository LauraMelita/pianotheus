import React, { forwardRef } from 'react';

import './Button.scss';

const Button = forwardRef(
  ({ className, href, variant, children, ...props }, ref) => {
    const combinedClassName = `${className || ''} ${variant || ''}`.trim();

    if (href)
      return (
        <a className={combinedClassName} href={href} {...props}>
          {children}
        </a>
      );

    return (
      <button className={combinedClassName} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

export default Button;
