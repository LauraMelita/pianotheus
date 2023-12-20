import React from 'react';

import { useParallax } from '../../../hooks/useParallax';
import ParallaxLayer from './parallaxLayer/ParallaxLayer';

import Mountains from '../../../assets/images/parallax/mountains.png';
import Planets from '../../../assets/images/parallax/planets.png';
import Stars from '../../../assets/images/parallax/stars.png';
import Fog1 from '../../../assets/images/parallax/fog_1.png';
import Fog2 from '../../../assets/images/parallax/fog_2.png';
import Fog3 from '../../../assets/images/parallax/fog_3.png';
import Fog4 from '../../../assets/images/parallax/fog_4.png';
import Fog5 from '../../../assets/images/parallax/fog_5.png';
import BlackShadow from '../../../assets/images/parallax/black_shadow.png';
import SunRays from '../../../assets/images/parallax/sun_rays.png';

import './Parallax.scss';

const Parallax = () => {
  const { parallaxRef, useSpeed } = useParallax();

  return (
    <div className='parallax' ref={parallaxRef}>
      <ParallaxLayer
        layer='fog1'
        stackOrder={0}
        src={Fog1}
        backgroundSize='cover'
        backgroundPosition='top'
        translateX={useSpeed(2)}
      />

      <ParallaxLayer
        layer='stars'
        stackOrder={1}
        src={Stars}
        backgroundSize='cover'
        backgroundPosition='bottom'
        translateX={useSpeed(1)}
      />

      <ParallaxLayer
        layer='fog2'
        stackOrder={2}
        src={Fog2}
        backgroundSize='auto'
        backgroundPosition='0% 0%'
        translateX={useSpeed(0.5)}
      />

      <ParallaxLayer
        layer='fog5'
        stackOrder={3}
        src={Fog5}
        backgroundSize='cover'
        backgroundPosition='bottom'
        translateX={useSpeed(2)}
      />

      <ParallaxLayer
        layer='planets'
        stackOrder={4}
        src={Planets}
        backgroundSize='cover'
        backgroundPosition='bottom'
        translateY={useSpeed(1)}
      />

      <ParallaxLayer
        layer='fog4'
        stackOrder={5}
        src={Fog4}
        backgroundSize='50%'
        backgroundPosition='50% 100%'
        translateY={useSpeed(0.5)}
      />

      <ParallaxLayer
        layer='logo'
        stackOrder={6}
        inset='50% 37%'
        translateY={useSpeed(2)}
      >
        <h1>Hello World</h1>
      </ParallaxLayer>

      <ParallaxLayer
        layer='fog3'
        stackOrder={7}
        src={Fog3}
        backgroundSize='300px'
        backgroundPosition='75% 60%'
        translateX={useSpeed(2)}
      />

      <ParallaxLayer
        layer='mountains'
        stackOrder={8}
        src={Mountains}
        backgroundSize='cover'
        backgroundPosition='bottom'
      />

      <ParallaxLayer
        layer='sun-rays'
        stackOrder={9}
        src={SunRays}
        backgroundSize='auto'
        backgroundPosition='top right'
        translateX={useSpeed(2)}
      />

      <ParallaxLayer
        layer='black-shadow'
        stackOrder={10}
        src={BlackShadow}
        backgroundSize='cover%'
        backgroundPosition='bottom'
        translateY={useSpeed(3)}
      />
    </div>
  );
};

export default Parallax;
