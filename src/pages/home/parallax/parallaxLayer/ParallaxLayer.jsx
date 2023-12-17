import React from 'react';
import { motion } from 'framer-motion';

const ParallaxLayer = ({
  layer,
  stackOrder,
  transformY,
  transformX,
  src,
  size,
  position,
}) => {
  return (
    <motion.div
      className={`parallax__${layer}`}
      style={{
        zIndex: stackOrder,
        y: transformY,
        x: transformX,
        backgroundImage: `url(${src})`,
        backgroundSize: size,
        backgroundPosition: position,
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
};

export default ParallaxLayer;
