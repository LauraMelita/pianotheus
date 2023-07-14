import React from 'react';
import { shuffle } from 'lodash';

import { generateNumber } from '../utils/helper';

import './../styles/components/AnimatedBackground.scss';

const AnimatedBackground = () => {
  const psControllerBtns = ['circle', 'triangle', 'cross', 'square'];

  const generatedElements = psControllerBtns.flatMap((element) => {
    const repeatedElements = [...Array(8).keys()].map(() => element);
    return shuffle(repeatedElements);
  });

  return (
    <div className='backwrap gradient'>
      <div className='back-shapes'>
        {generatedElements.map((element, index) => (
          <span
            key={index}
            className={`floating ${element}`}
            style={{
              top: `${generateNumber(0, 100)}%`,
              left: `${generateNumber(0, 100)}%`,
              animationDelay: `-${generateNumber(0.1, 4)}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;
