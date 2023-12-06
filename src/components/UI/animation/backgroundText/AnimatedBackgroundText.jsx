import React from 'react';

import './AnimatedBackgroundText.scss';

const AnimatedBackgroundText = ({ text, backgroundImage, animationSpeed }) => {
  return (
    <div className='animated-text'>
      <h1
        style={{
          backgroundImage: `url(${backgroundImage})`,
          animation: `animate ${animationSpeed}s ease-in-out infinite`,
        }}
      >
        {text}
      </h1>
    </div>
  );
};

export default AnimatedBackgroundText;
