import React from 'react';
import { motion } from 'framer-motion';

import './Tagline.scss';

const Tagline = ({ tagline }) => {
  return (
    <motion.span
      className='tagline'
      //   initial={{ opacity: 0 }}
      //   animate={{ opacity: 1 }}
      //   transition={{
      //     duration: 1,
      //   }}
    >
      {tagline}
    </motion.span>
  );
};

export default Tagline;
