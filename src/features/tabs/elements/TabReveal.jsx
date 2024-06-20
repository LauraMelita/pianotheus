import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const TabReveal = ({ animationKey, animation, duration, children }) => {
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={animationKey}
        variants={animation}
        initial='initial'
        animate='enter'
        exit='exit'
        transition={{ duration }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default TabReveal;
