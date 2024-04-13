import React from 'react';
import { motion } from 'framer-motion';

import { useParallax } from '../../../hooks/useParallax';

import { BackgroundImage as ParallaxLayer } from '../../../components/UI/image/BackgroundImage';
import AnimatedStars from '../../../components/UI/animation/stars/AnimatedStars';
import Aurora from '../../../components/UI/animation/aurora/Aurora';

import Fog1 from '../../../assets/images/parallax/fog_1.png';
import Moon from '../../../assets/images/parallax/moon.png';
import Fog2 from '../../../assets/images/parallax/fog_2.png';
import Fog3 from '../../../assets/images/parallax/fog_3.png';
import Mountains from '../../../assets/images/parallax/mountains.png';
import Raven from '../../../assets/images/parallax/raven.png';
import Prometheus from '../../../assets/images/parallax/prometheus.png';

const Parallax = () => {
  const { parallaxRef, useSpeed } = useParallax();

  return (
    <motion.div ref={parallaxRef} className='parallax stack'>
      <ParallaxLayer zIndex={0} inset='0'>
        <AnimatedStars fade radius={50} count={2500} factor={2} speed={2} />
      </ParallaxLayer>

      <ParallaxLayer zIndex={1} inset='0'>
        <Aurora hexColors={['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C']} />
      </ParallaxLayer>

      <ParallaxLayer
        url={Fog1}
        zIndex={1}
        backgroundSize='auto'
        translateX={useSpeed(2)}
        gradient={{
          type: 'linear',
          direction: '270deg',
          transparentPosition: '90%',
          bgPosition: '100%',
        }}
      />

      <ParallaxLayer
        url={Moon}
        zIndex={2}
        backgroundSize='20em'
        backgroundPosition='top left'
        translateY={useSpeed(1)}
      />

      <ParallaxLayer
        url={Fog2}
        zIndex={2}
        backgroundSize='auto'
        backgroundPosition='top right'
        translateX={useSpeed(0.5)}
      />

      <ParallaxLayer
        url={Fog3}
        zIndex={3}
        backgroundSize='50%'
        backgroundPosition='50% 100%'
        translateY={useSpeed(0.5)}
      />

      <ParallaxLayer
        url={Mountains}
        zIndex={4}
        backgroundSize='cover'
        backgroundPosition='bottom'
        gradient={{
          type: 'linear',
          direction: '180deg',
          transparentPosition: '88%',
          bgPosition: '100%',
        }}
      />

      <ParallaxLayer
        url={Raven}
        zIndex={4}
        backgroundSize='3em'
        backgroundPosition='8% 17%'
      />

      <ParallaxLayer
        url={Prometheus}
        zIndex={4}
        backgroundSize='5em'
        backgroundPosition='68% 80%'
      />
    </motion.div>
  );
};

export default Parallax;
