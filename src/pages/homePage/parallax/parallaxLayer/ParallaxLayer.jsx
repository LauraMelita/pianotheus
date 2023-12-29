import React from 'react';
import { motion } from 'framer-motion';

const ParallaxLayer = ({
  layer,
  stackOrder,
  src,
  backgroundSize,
  backgroundPosition,
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
        inset,
        backgroundRepeat: 'no-repeat',
      }}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxLayer;
