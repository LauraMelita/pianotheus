import React from 'react';

import AnimatedBackgroundText from '../components/UI/AnimatedBackgroundText';
import Quote from '../components/Quote';
import HomeCategories from '../components/HomeCategories';
import AnimatedFlyInText from '../components/UI/AnimatedFlyInText';

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
      <HomeCategories />
      <AnimatedFlyInText
        text='Laura Is The Queen of the World'
        fontSize='30px'
        fontWeight='500'
        color='#fff'
      />
    </>
  );
};

export default HomePage;
