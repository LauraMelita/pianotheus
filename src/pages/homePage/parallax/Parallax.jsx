import React from 'react';
import { motion } from 'framer-motion';

import { useParallax } from '../../../hooks/useParallax';
import { useResponsive } from '../../../hooks/useResponsive';

import AnimatedStars from '../../../components/UI/animation/stars/AnimatedStars';
import Aurora from '../../../components/UI/animation/aurora/Aurora';
import { BackgroundImage } from '../../../components/UI/image/BackgroundImage';
import Introduction from './elements/Introduction';

import Moon from '../../../assets/images/parallax/moon.png';

import './Parallax.scss';

const Parallax = () => {
  const { parallaxRef, useSpeed } = useParallax();
  const { isTablet, isMobile } = useResponsive();

  return (
    <motion.div ref={parallaxRef} className='parallax stack'>
      <AnimatedStars fade radius={50} count={2500} factor={2} speed={2} />
      <Aurora hexColors={['#13FFAA', '#CE84CF', '#DD335C']} />
      <BackgroundImage
        url={Moon}
        backgroundSize={isTablet || isMobile ? '7em' : '15em'}
        backgroundPosition='10% 10%'
        translateY={useSpeed(0.1)}
        translateX={useSpeed(0.1)}
      />
      <Introduction />
    </motion.div>
  );
};

export default Parallax;
