import React from 'react';
import { useDocumentTitle } from '@mantine/hooks';

import Parallax from './parallax/Parallax';
import Categories from './categories/Categories';
import Quote from '../../components/UI/quote/Quote';
import About from './about/About';

import './Home.scss';

const HomePage = () => {
  useDocumentTitle('Pianotheus: MIDI Piano Collection');

  return (
    <main className='home'>
      <section className='full-width'>
        <Parallax />
      </section>
      <section>
        <Categories />
      </section>
      <section>
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
      <section id='about'>
        <About />
      </section>
    </main>
  );
};

export default HomePage;
