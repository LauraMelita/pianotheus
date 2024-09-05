import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';

const Image = forwardRef(
  ({ className, src, alt, fallbackImage, ...props }, ref) => {
    const handleLoadError = (e) => {
      e.currentTarget.src = fallbackImage;
      e.currentTarget.onError = null; // Avoid infinite loops if the fallback image can't be loaded
    };

    return (
      <motion.img
        ref={ref}
        className={classNames(className)}
        src={src}
        alt={alt}
        onError={handleLoadError}
        {...props}
      />
    );
  }
);

export default Image;
