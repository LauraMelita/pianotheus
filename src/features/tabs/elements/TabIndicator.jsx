import React from 'react';
import { motion } from 'framer-motion';

const TabIndicator = ({ padding }) => {
  return (
    <motion.div
      className='tabs__indicator'
      layoutId='indicator'
      aria-hidden
      style={{ bottom: `-${padding}px` }}
    />
  );
};

export default TabIndicator;
