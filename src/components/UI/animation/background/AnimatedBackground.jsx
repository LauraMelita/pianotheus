import React from 'react';
import { shuffle } from 'lodash';

import { generateNumber } from '../../../../utils/helpers';

import './AnimatedBackground.scss';

const AnimatedBackground = (props) => {
  const generatedElements = props.elements.flatMap((element) => {
    const repeatedElements = [...Array(props.repeat).keys()].map(() => element);
    return shuffle(repeatedElements);
  });

  return (
    <div className='animated-bg'>
      <div
        className='animated-bg__backwrap'
        style={{ backgroundImage: `url(${props.backWrap})` }}
      >
        <div className='animated-bg__back-shapes'>
          {generatedElements.map((element, index) => (
            <span
              key={index}
              className={`animated-bg__floating ${element}`}
              style={{
                backgroundImage: `url(${require(`../../../../assets/images/animatedBackground/${element}.png`)})`,
                top: `${generateNumber(0, 100)}%`,
                left: `${generateNumber(2, 100)}%`,
                right: `${generateNumber(-2, 100)}%`,
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
