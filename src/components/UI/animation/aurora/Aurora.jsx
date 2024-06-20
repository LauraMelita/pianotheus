import React from 'react';
import { motion, useMotionTemplate } from 'framer-motion';
import { useAnimatedColors } from '../../../../hooks/useAnimatedColors';
import { GLOBAL_STYLES } from '../../../../utils/constants';

const Aurora = ({ hexColors }) => {
  const color = useAnimatedColors(hexColors, 10);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, ${GLOBAL_STYLES.TRANSPARENT_COLOR} 50%, ${color})`;

  // Updated maskImage for half-moon effect
  const maskImage = 'linear-gradient(rgba(18, 18, 18, 1) 60%, transparent)';

  return (
    <motion.div
      style={{
        height: '100%',
        width: '100%',
        backgroundImage,
        maskImage,
        WebkitMaskImage: maskImage,
      }}
    ></motion.div>
  );
};

export default Aurora;
