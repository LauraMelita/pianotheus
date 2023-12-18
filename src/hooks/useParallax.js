import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

export const useParallax = () => {
  const parallaxRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ['start start', 'end start'],
  });

  const useSpeed = (speed) =>
    useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`]);

  return {
    parallaxRef,
    useSpeed,
  };
};
