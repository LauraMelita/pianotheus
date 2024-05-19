import React from 'react';
import { motion } from 'framer-motion';

import './GlowEffect.scss';

// ============================================================
// Add the .glow-effect utility class to the parent HTML element
// Add the GlowEffect component inside of it
// Make sure to have matching border radiuses
// ============================================================

const GlowEffect = ({
  borderRadius = '20px',
  glowLineColor = '#fff',
  glowLineThickness = '2px',
  glowBlurColor = '#fff',
  glowBlurSize = '5px',
}) => {
  return (
    <motion.svg
      className='glow'
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1, transition: { duration: 0.3 } }}
    >
      <rect
        className='glow__blur'
        pathLength='100'
        strokeDasharray='50px 0px'
        fill='transparent'
        rx={borderRadius}
        stroke={glowBlurColor}
        strokeWidth={glowBlurSize}
        strokeLinecap='round'
        style={{ filter: `blur(${glowBlurSize})` }}
      ></rect>
      <rect
        className='glow__line'
        pathLength='100'
        strokeDasharray='50px 0px'
        fill='transparent'
        rx={borderRadius}
        stroke={glowLineColor}
        strokeWidth={glowLineThickness}
        strokeLinecap='round'
      ></rect>
    </motion.svg>
  );
};
export default GlowEffect;
