import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';

import './Button.scss';

// Variants: primary, secondary, link, icon, ghost

const Button = forwardRef(
  ({ className, href, variant, children, ...props }, ref) => {
    const classes = classNames(className, variant);

    if (href)
      return (
        <motion.a
          ref={ref}
          className={classNames('btn__link', classes)}
          href={href}
          {...props}
        >
          {children}
        </motion.a>
      );

    return (
      <motion.button ref={ref} className={classes} {...props}>
        {children}
      </motion.button>
    );
  }
);

export default Button;
