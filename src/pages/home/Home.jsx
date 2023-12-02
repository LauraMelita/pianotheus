import React from 'react';

import ParallaxContainer from '../../features/parallax/ParallaxContainer';
import About from './about/About';
import Quote from './quote/Quote';
import HomeCategories from './categories/HomeCategories';

const HomePage = () => {
  return (
    <main>
      <section id='parallax'>
        <ParallaxContainer />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='quote'>
        <Quote />
      </section>
      <section id='categories'>
        <HomeCategories />
      </section>
    </main>
  );
};

export default HomePage;
