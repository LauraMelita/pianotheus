import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

import './Button.scss';

const Button = forwardRef(
  ({ className, href, variant, children, ...props }, ref) => {
    const combinedClassName = `${className || ''} ${variant || ''}`.trim();

    if (href)
      return (
        <motion.a
          ref={ref}
          className={combinedClassName}
          href={href}
          {...props}
        >
          {children}
        </motion.a>
      );

    return (
      <motion.button ref={ref} className={combinedClassName} {...props}>
        {children}
      </motion.button>
    );
  }
);

export default Button;
