import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import { useAnimations } from '../../../../hooks/useAnimations';

import Svg from '../../../../components/UI/svg/Svg';

import './Tips.scss';

const Tips = ({ tips }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });
  const { reveal } = useAnimations();

  return (
    <motion.ul
      ref={ref}
      className='tips'
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ staggerChildren: 0.2 }}
    >
      {tips.map(({ title, tip, icon }, index) => (
        <motion.li key={index} variants={reveal}>
          <span>
            {/* <Svg icon={icon} /> */}
            {title}
          </span>
          <p>{tip}</p>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default Tips;
