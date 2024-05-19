import React from 'react';
import { motion } from 'framer-motion';

import { useAnimations } from '../../../../hooks/useAnimations';

import './Genres.scss';

const Genres = ({ genres }) => {
  const { staggerReveal } = useAnimations();

  return (
    <ul className='genres'>
      {genres.toSorted().map((tag, index) => (
        <motion.li
          key={index}
          variants={staggerReveal}
          initial='initial'
          animate='animate'
          custom={index}
        >
          {tag}
        </motion.li>
      ))}
    </ul>
  );
};

export default Genres;
