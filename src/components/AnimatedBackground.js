import React from 'react';
import { shuffle } from 'lodash';

import { generateNumber } from '../utils/helper';

import '../styles/components/AnimatedBackground.scss';

const AnimatedBackground = (props) => {
  const generatedElements = props.elements.flatMap((element) => {
    const repeatedElements = [...Array(props.repeat).keys()].map(() => element);
    return shuffle(repeatedElements);
  });

  return (
    <div className='animated-background'>
      <div
        className='backwrap'
        style={{ backgroundImage: `url(${props.backWrap})` }}
      >
        <div className='back-shapes'>
          {generatedElements.map((element, index) => (
            <span
              key={index}
              className={`floating ${element}`}
              style={{
                backgroundImage: `url(${require(`../assets/animated background/${element}.png`)})`,
                top: `${generateNumber(0, 100)}%`,
                left: `${generateNumber(0, 100)}%`,
                animationDelay: `-${generateNumber(0.1, 4)}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
