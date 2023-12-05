import React from 'react';
import { motion } from 'framer-motion';

const FadeIn = (props) => {
  return (
    <motion.div
      className='fade-in'
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      {props.children}
    </motion.div>
  );
};

export default FadeIn;
