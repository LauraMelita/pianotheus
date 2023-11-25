import React from 'react';
import { shuffle } from 'lodash';

import { generateNumber } from '../../../../utils/helper';

import './AnimatedBackground.scss';

const AnimatedBackground = (props) => {
  // Usage example:
  /* <AnimatedBackgroundText
        text='Pianotheus'
        minTextSize='50px'
        idealTextSize='2.5vw'
        maxTextSize='60px'
        fontWeight='900'
        backgroundImage={PianoOnFire}
        animationSpeed='15'
      /> 
  */

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
                backgroundImage: `url(${require(`../../../../assets/images/animatedBackground/${element}.png`)})`,
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
