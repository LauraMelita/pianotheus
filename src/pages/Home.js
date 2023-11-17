import React from 'react';

import AnimatedBackgroundText from '../components/UI/AnimatedBackgroundText';
import Quote from '../components/UI/Quote';
import HomeCategories from '../components/HomeCategories';
import AnimatedFlyInText from '../components/UI/AnimatedFlyInText';

import PianoOnFire from '../assets/pianotheus-text-bg.jpg';

const HomePage = () => {
  return (
    <main>
      <AnimatedBackgroundText
        text='Pianotheus'
        minTextSize='50px'
        idealTextSize='2.5vw'
        maxTextSize='60px'
        fontWeight='900'
        backgroundImage={PianoOnFire}
        animationSpeed='15'
      />
      <Quote
        quoteText={`Prometheus stole fire from the gods. We are each the heirs of that divine spark.
        <br />
        Used wisely, the spark fuels one's journey and lights the way.
        <br />
        Treated carelessly, the spark consumes its owner and everything in its
        path.`}
        author='Thomas Lloyd Qualls'
        source='Painted Oxen'
      />
      <HomeCategories />
      <AnimatedFlyInText
        text='Fly-in text'
        fontSize='30px'
        fontWeight='500'
        animationSpeed='1.5'
      />
    </main>
  );
};

export default HomePage;
