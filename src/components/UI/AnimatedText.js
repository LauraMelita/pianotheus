import React from 'react';

import './AnimatedText.scss';

const AnimatedText = ({
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

export default AnimatedText;
