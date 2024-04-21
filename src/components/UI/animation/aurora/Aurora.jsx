import React from 'react';
import { motion, useMotionTemplate } from 'framer-motion';

import { useAnimatedColors } from '../../../../hooks/useAnimatedColors';

import { GLOBAL_STYLES } from '../../../../utils/constants';

const Aurora = ({ hexColors }) => {
  const color = useAnimatedColors(hexColors, 10);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, ${GLOBAL_STYLES.TRANSPARENT_COLOR} 50%, ${color})`;

  return (
    <motion.div
      style={{ height: '100%', width: '100%', backgroundImage }}
    ></motion.div>
  );
};

export default Aurora;
