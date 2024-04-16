import React, { useEffect } from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from 'framer-motion';

import { GLOBAL_STYLES } from '../../../../utils/constants';

const Aurora = ({ hexColors, duration = 10 }) => {
  const color = useMotionValue(hexColors[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, ${GLOBAL_STYLES.TRANSPARENT_COLOR} 50%, ${color})`;

  // ALSO AVAILABLE:
  // const border = useMotionTemplate`1px solid ${color}`;
  // const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  useEffect(() => {
    animate(color, hexColors, {
      ease: 'easeInOut',
      duration,
      repeat: Infinity,
      repeatType: 'mirror',
    });
  }, []);

  return (
    <motion.div
      style={{ height: '100%', width: '100%', backgroundImage }}
    ></motion.div>
  );
};

export default Aurora;
