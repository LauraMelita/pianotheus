import React from 'react';

import Parallax from './parallax/Parallax';
import Categories from './categories/Categories';
import Quote from '../../components/UI/quote/Quote';
import About from './about/About';

import './HomePage.scss';

const HomePage = () => {
  return (
    <main className='home'>
      <section className='full-width'>
        <Parallax />
      </section>
      <section id='about'>
        <About />
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
    </main>
  );
};

export default HomePage;
