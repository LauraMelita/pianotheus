import React from 'react';

import AnimatedText from '../components/UI/AnimatedText';
import Quote from '../components/Quote';
import HomeCategories from '../components/HomeCategories';

import PianoOnFire from '../assets/pianotheus-text-bg.jpg';

const HomePage = () => {
  return (
    <>
      <AnimatedText
        minTextSize='50px'
        idealTextSize='2.5vw'
        maxTextSize='60px'
        backgroundImage={PianoOnFire}
        fontSize={'80'}
      />
      <Quote />
      <HomeCategories />
    </>
  );
};

export default HomePage;
