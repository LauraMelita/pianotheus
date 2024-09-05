import React, { forwardRef } from 'react';
import classNames from 'classnames';

const Alert = forwardRef(({ severity, className, children, ...props }, ref) => {
  return (
    <span className={classNames(className, severity)} ref={ref} {...props}>
      {children}
    </span>
  );
});

export default Alert;
