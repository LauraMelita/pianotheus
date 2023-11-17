import React, { useState, useEffect } from 'react';

import './AnimatedFlyInText.scss';

import { generateNumber } from '../../utils/helper';

const AnimatedText = ({ text, fontSize, fontWeight, animationSpeed }) => {
  const [isHidden, setIsHidden] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHidden((prevState) => !prevState);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ul
      className={`fly-in-text ${isHidden ? 'hidden' : ''}`}
      style={{ text, fontSize, fontWeight }}
    >
      {text.split('').map((letter, index) => {
        if (letter.includes(' ')) letter = '';
        return (
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
                : { transition: `all ${animationSpeed}s ease` }
            }
          >
            {letter}
          </li>
        );
      })}
    </ul>
  );
};

export default AnimatedText;
