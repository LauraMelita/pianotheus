import React from 'react';
import { motion } from 'framer-motion';

import Button from '../button/Button';
import Svg from '../svg/Svg';

const Thumbnail = ({ title, videoKey }) => {
  return (
    <motion.div
      className='thumbnail'
      initial={{ opacity: 0.9 }}
      whileHover={{ opacity: 1, scale: 1.01 }}
    >
      <img
        src={`https://img.youtube.com/vi/${videoKey}/maxresdefault.jpg`}
        alt={`${title} thumbnail`}
      />
      <Button>
        <Svg icon='play' />
      </Button>
    </motion.div>
  );
};

export default Thumbnail;
