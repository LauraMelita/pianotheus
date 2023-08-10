import React, { useState, useEffect } from 'react';

import './AnimatedFlyInText.scss';

import { generateNumber } from '../../utils/helper';

const AnimatedText = ({ text, fontSize, fontWeight, color }) => {
  const [isHidden, setIsHidden] = useState(true);

  const textArrayWithSpaces = text
    .replaceAll(' ', '*')
    .split('')
    .map((letter) => {
      return letter.replace('*', '');
    });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHidden((prevState) => !prevState);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ul
      className={`fly-in-text ${isHidden ? 'hidden' : ''}`}
      style={{ text, fontSize, fontWeight, color }}
    >
      {textArrayWithSpaces.map((letter, index) => (
        <li
          key={index}
          style={
            isHidden
              ? {
                  transform: `translate(${generateNumber(
                    -500,
                    100
                  )}px) translateY(${generateNumber(-500, 100)}px)`,
                }
              : {}
          }
        >
          {letter}
        </li>
      ))}
    </ul>
  );
};

export default AnimatedText;
