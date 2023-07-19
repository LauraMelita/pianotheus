import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import AnimatedBackground from '../components/AnimatedBackground';
import GoToPrevPageButton from '../components/GoToPrevPageButton';

import { container, item } from '../utils/animation';

import BackWrapImageOne from '../assets/animated background/backwrap.png';

import '../styles/pages/MoviePage.scss';

const MoviesPage = () => {
  // Cool animation: https://www.youtube.com/watch?v=3QrkCmsfewM&ab_channel=WrongAkram
  // Slide animation: https://www.youtube.com/watch?v=FdrEjwymzdY&ab_channel=PedroTech

  return (
    <motion.div
      className='movies-page'
      initial={{ y: '100%' }}
      animate={{ y: '0%' }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      exit={{ opacity: 1 }}
    >
      <div style={{ overflow: 'hidden' }}>
        <Link to='/movies/composers'>
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Search by composer
          </motion.h1>
        </Link>
      </div>

      <div style={{ overflow: 'hidden' }}>
        <Link to='/movies/search'>
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Search by title
          </motion.h1>
        </Link>
      </div>

      <motion.ul variants={container} initial='hidden' animate='show'>
        <div style={{ overflow: 'hidden' }}>
          <motion.li variants={item}>Hola</motion.li>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <motion.li variants={item}>Banana</motion.li>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <motion.li variants={item}>Boom</motion.li>
        </div>
      </motion.ul>

      <AnimatedBackground
        elements={['circle', 'triangle', 'cross', 'square']}
        repeat={10}
        backWrap={BackWrapImageOne}
      />

      <GoToPrevPageButton btnText='Back to Home Page' />
    </motion.div>
  );
};

export default MoviesPage;
