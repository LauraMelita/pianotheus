import React from 'react';

import Parallax from './parallax/Parallax';
import UserGuide from './userGuide/UserGuide';
import About from './about/About';
import Categories from './categories/Categories';

import './HomePage.scss';

const HomePage = () => {
  return (
    <main className='home'>
      <section id='parallax' className='full-width'>
        <Parallax />
      </section>
      <section id='user-guide'>
        <UserGuide />
      </section>
      <section id='about' className='full-width'>
        <About />
      </section>
      <section id='categories'>
        <Categories />
      </section>
    </main>
  );
};

export default HomePage;
