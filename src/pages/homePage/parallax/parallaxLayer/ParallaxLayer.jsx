import React from 'react';
import { motion } from 'framer-motion';

const ParallaxLayer = ({
  layer,
  stackOrder,
  src,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat = 'no-repeat',
  inset,
  translateY,
  translateX,
  children,
}) => {
  return (
    <motion.div
      className={`parallax__${layer}`}
      style={{
        zIndex: stackOrder,
        y: translateY,
        x: translateX,
        backgroundImage: src ? `url(${src})` : null,
        backgroundSize,
        backgroundPosition,
        backgroundRepeat,
        inset,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxLayer;
