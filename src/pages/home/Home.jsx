import React from 'react';

import { useDocumentTitle } from '@mantine/hooks';

import ParallaxContainer from '../../features/parallax/ParallaxContainer';
import About from './about/About';
import Quote from './quote/Quote';
import HomeCategories from './categories/HomeCategories';

import './Home.scss';

const HomePage = () => {
  useDocumentTitle('Pianotheus: MIDI Piano Collection');

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
        <Quote
          text={`<p>
            Prometheus stole fire from the gods. We are each the heirs of that
            divine spark.
            <br />
            Used wisely, the spark fuels one's journey and lights the way.
            <br />
            Treated carelessly, the spark consumes its owner and everything in its
            path.
          </p>`}
          author='Thomas Lloyd Qualls'
          source='Painted Oxen'
        />
      </section>
    </main>
  );
};

export default HomePage;
