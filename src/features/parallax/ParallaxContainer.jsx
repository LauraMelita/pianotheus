import React from 'react';

import ParallaxLayer from './ParallaxLayer';

import BackgroundImage from '../../assets/parallax/background.jpg';
import MiddlegroundImage from '../../assets/parallax/middleground.webp';
import ForegroundImage from '../../assets/parallax/foreground.png';
import './ParallaxContainer.scss';

const ParallaxContainer = () => {
  return (
    <div className='parallax'>
      <ParallaxLayer
        layer='background'
        src={BackgroundImage}
        layerData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 1,
                endValue: 1.18,
                property: 'scale',
              },
            ],
          },
        ]}
      />

      <ParallaxLayer
        layer='middleground'
        src={MiddlegroundImage}
        layerData={[
          {
            start: 0,
            end: 400,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: 'opacity',
              },
            ],
          },
        ]}
      />

      <ParallaxLayer
        layer='foreground'
        src={ForegroundImage}
        layerData={[
          {
            start: 0,
            end: 700,
            easing: 'ease-in',
            properties: [
              {
                startValue: 1,
                endValue: 1.6,
                property: 'scale',
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default ParallaxContainer;
