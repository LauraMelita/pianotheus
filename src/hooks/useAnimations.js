import { useResponsive } from './useResponsive';

export const useAnimations = () => {
  const { isMobile } = useResponsive();

  const showHide = {
    show: {
      opacity: 1,
      display: 'block',
      transition: {
        type: 'spring',
        duration: 3,
      },
    },
    hidden: {
      opacity: 0,
      display: 'none',
    },
  };

  const slideRight = {
    open: {
      width: isMobile ? '100%' : '50%',
      transition: {
        type: 'spring',
        duration: 0.8,
      },
    },
    closed: {
      width: 0,
    },
  };

  const slideDown = {
    open: {
      height: '100%',
      transition: {
        type: 'spring',
        duration: 0.8,
      },
    },
    closed: {
      height: 0,
    },
  };

  const fadeAndSlide = {
    initial: {
      y: 10,
      opacity: 0,
    },
    enter: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: -10,
      opacity: 0,
    },
  };

  const staggerCards = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  const highlight = {
    inactive: {
      opacity: 0.6,
      filter: 'brightness(1)',
    },
    active: {
      opacity: 1,
      filter: 'brightness(1.5)',
    },
  };

  return {
    showHide,
    slideRight,
    slideDown,
    staggerCards,
    highlight,
    fadeAndSlide,
  };
};
