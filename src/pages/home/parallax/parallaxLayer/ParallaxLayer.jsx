import React from 'react';
import { motion } from 'framer-motion';

const ParallaxLayer = ({ layer, src, layerData }) => {
  return (
    <motion.div
      className={`parallax__${layer}`}
      style={{
        backgroundImage: `url(${src})`,
      }}
    />
  );
};

export default ParallaxLayer;
