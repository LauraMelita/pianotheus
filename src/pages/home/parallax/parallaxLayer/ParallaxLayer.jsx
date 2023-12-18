import React from 'react';
import { motion } from 'framer-motion';

const ParallaxLayer = ({
  layer,
  stackOrder,
  src,
  backgroundSize,
  backgroundPosition,
  translateY,
  translateX,
}) => {
  return (
    <motion.div
      className={`parallax__${layer}`}
      style={{
        zIndex: stackOrder,
        y: translateY,
        x: translateX,
        backgroundImage: `url(${src})`,
        backgroundSize,
        backgroundPosition,
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
};

export default ParallaxLayer;
