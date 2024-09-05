import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import classNames from 'classnames';

import './AnimatedText.scss';

const AnimatedText = ({
  className,
  text,
  animateOnlyOnce,
  animationSpeed = 0.1,
}) => {
  const textContainerRef = useRef(null);

  const isInView = useInView(textContainerRef, {
    amount: 0.5, // Triggers when at least 50% of the element is in view
    once: animateOnlyOnce,
  });

  const ScreenReaderText = () => {
    return <span className='sr-only'>{text}</span>;
  };

  const defaultAnimations = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: animationSpeed,
      },
    },
  };

  return (
    <h1 className={classNames(className, 'animated-text')}>
      <ScreenReaderText />
      <motion.div
        ref={textContainerRef}
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ staggerChildren: 0.1 }}
        aria-hidden
      >
        {text.split(' ').map((word, index, array) => (
          <span key={index}>
            {word.split('').map((character, charIndex) => (
              <motion.span key={charIndex} variants={defaultAnimations}>
                {character}
              </motion.span>
            ))}
            {index !== array.length - 1 && (
              <span className='space'>&nbsp;</span>
            )}
          </span>
        ))}
      </motion.div>
    </h1>
  );
};

export default AnimatedText;
