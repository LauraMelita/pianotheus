import React from 'react';

import AnimatedBackgroundText from '../components/AnimatedBackgroundText';
import Quote from '../components/Quote';
import ContentTypes from '../components/ContentTypes';

import PianoOnFire from '../assets/pianotheus-text-bg.jpg';

const HomePage = () => {
  return (
    <>
      <AnimatedBackgroundText
        minTextSize='50px'
        idealTextSize='2.5vw'
        maxTextSize='60px'
        backgroundImage={PianoOnFire}
        fontSize={'80'}
      />
      <Quote />
      <ContentTypes />
    </>
  );
};

export default HomePage;
