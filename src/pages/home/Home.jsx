import React from 'react';

import ParallaxContainer from '../../features/parallax/ParallaxContainer';
import About from './about/About';
import Quote from './quote/Quote';
import HomeCategories from './categories/HomeCategories';

import './Home.scss';

const HomePage = () => {
  return (
    <main className='home'>
      <section id='parallax'>
        <ParallaxContainer />
      </section>
      <section id='categories'>
        <HomeCategories />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='quote'>
        <Quote />
      </section>
    </main>
  );
};

export default HomePage;
