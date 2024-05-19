import { useEffect } from 'react';
import { useMotionValue, animate } from 'framer-motion';

export const useAnimatedColors = (hexColorStops, duration = 10) => {
  const color = useMotionValue(hexColorStops[0]);

  useEffect(() => {
    const animation = animate(color, hexColorStops, {
      ease: 'easeInOut',
      duration,
      repeat: Infinity,
      repeatType: 'mirror',
    });

    return () => {
      animation.stop(); // Clean up the animation on unmount
    };
  }, [hexColorStops, duration, color]);

  return color;
};

// ============================================================
// This hook animates between a series of colors.

// USAGE
// 1. Use a motion component, e.g. <motion.div />
// 2. Use useMotionTemplate to set the style, e.g. useMotionTemplate`linear-gradient(45deg, transparent, ${color})`;

// ============================================================
