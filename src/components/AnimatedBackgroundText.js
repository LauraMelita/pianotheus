import React from 'react';

import '../styles/components/AnimatedBackgroundText.scss';

const AnimatedBackgroundText = ({
  minTextSize,
  idealTextSize,
  maxTextSize,
  backgroundImage,
}) => {
  return (
    <div className='animated-text'>
      <h1
        style={{
          fontSize: `clamp(${minTextSize}, ${idealTextSize}, ${maxTextSize})`,
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        Pianotheus
      </h1>
    </div>
  );
};

export default AnimatedBackgroundText;
