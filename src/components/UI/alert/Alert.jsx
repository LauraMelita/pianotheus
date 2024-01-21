import React, { forwardRef } from 'react';

const Alert = forwardRef(({ severity, className, children, ...props }, ref) => {
  return (
    <span
      className={className ? `${severity} ${className}` : `${severity}`}
      ref={ref}
      {...props}
    >
      {children}
    </span>
  );
});

export default Alert;
