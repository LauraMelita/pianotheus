import React from 'react';

import { useParallax } from '../../../hooks/useParallax';
import ParallaxLayer from './parallaxLayer/ParallaxLayer';

import BackgroundImage from '../../../assets/images/parallax/background.jpg';
import MiddlegroundImage from '../../../assets/images/parallax/middleground.webp';
import ForegroundImage from '../../../assets/images/parallax/foreground.png';
import './Parallax.scss';

const Parallax = () => {
  const { parallaxRef, useCalculateSpeed } = useParallax();

  return (
    <div className='parallax' ref={parallaxRef}>
      <ParallaxLayer
        layer='background'
        stackOrder={1}
        transformY={useCalculateSpeed(1)}
        src={BackgroundImage}
        size='cover'
        position='bottom'
      />

      <ParallaxLayer
        layer='middleground'
        stackOrder={2}
        transformY={useCalculateSpeed(3)}
        src={MiddlegroundImage}
        size='auto 15%'
        position='center'
      />

      <ParallaxLayer
        layer='foreground'
        stackOrder={3}
        transformY={useCalculateSpeed(1)}
        src={ForegroundImage}
        size='cover'
        position='center'
      />
    </div>
  );
};

export default Parallax;
