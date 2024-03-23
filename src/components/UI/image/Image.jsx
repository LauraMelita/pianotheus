import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

const Image = forwardRef(({ className, src, alt, ...props }, ref) => {
  return (
    <motion.img
      ref={ref}
      className={className && className}
      src={src}
      alt={alt}
      {...props}
    />
  );
});

export default Image;
