import React from 'react';

import { useStyles } from '../../../hooks/useStyles';

const Hero = ({ image, children }) => {
  const { heroBackground } = useStyles();

  return (
    <section
      className='hero full-width'
      style={{
        backgroundImage: heroBackground(image),
      }}
    >
      <div className='hero__content'>{children}</div>
    </section>
  );
};

export default Hero;
