import React from 'react';
import { motion } from 'framer-motion';

import './SoundWaves.scss';

const SoundWaves = ({ bars, barWidth }) => {
  const soundBars = Array.from({ length: bars });

  return (
    <motion.div className='sound'>
      {soundBars.map((_, index) => (
        <motion.div
          key={index}
          className='sound__bar'
          style={{ width: barWidth }}
          animate={{ height: [5, 10, 5] }}
          transition={{
            repeat: Infinity,
            delay: index * 0.2,
          }}
        />
      ))}
    </motion.div>
  );
};

export default SoundWaves;
