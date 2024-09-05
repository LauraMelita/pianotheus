import React from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';

import { GLOBAL_STYLES } from '../../../utils/constants';

const BackgroundImage = ({
  className,
  zIndex,
  opacity,
  inset,
  translateY,
  translateX,
  gradient,
  url,
  backgroundSize = 'cover',
  backgroundPosition = 'auto 100%',
  backgroundRepeat = 'no-repeat',
  children,
}) => {
  const setBackgroundImage = () => {
    switch (gradient?.type) {
      case 'linear':
        return `linear-gradient(
            ${gradient.direction}, 
            ${GLOBAL_STYLES.TRANSPARENT_COLOR} ${gradient.transparentPosition}, 
            ${GLOBAL_STYLES.BACKGROUND_COLOR} ${gradient.bgPosition}), 
            url(${url})`;

      case 'radial':
        return `radial-gradient(
            ${gradient.shape}, 
            ${GLOBAL_STYLES.TRANSPARENT_COLOR} ${gradient.transparentPosition}, 
            ${GLOBAL_STYLES.BACKGROUND_COLOR} ${gradient.bgPosition}), 
            url(${url})`;

      default:
        return `url(${url})`;
    }
  };

  return (
    <motion.div
      className={classNames(className, 'bg-image')}
      style={{
        zIndex,
        opacity,
        inset,
        y: translateY,
        x: translateX,
        backgroundImage: url && setBackgroundImage(),
        backgroundSize,
        backgroundPosition,
        backgroundRepeat,
      }}
    >
      {children}
    </motion.div>
  );
};

export { BackgroundImage };
