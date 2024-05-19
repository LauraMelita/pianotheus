import React from 'react';
import { motion } from 'framer-motion';

const TabIndicator = ({ tabItemHeight }) => {
  return (
    <motion.div
      className='tabs__indicator'
      layoutId='indicator'
      aria-hidden
      style={{ bottom: `-${tabItemHeight}px` }}
    />
  );
};

export default TabIndicator;
