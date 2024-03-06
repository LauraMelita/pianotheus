import { useResponsive } from './useResponsive';

export const useAnimations = () => {
  const { isMobile } = useResponsive();

  const showHide = {
    open: {
      display: 'flex',
    },
    closed: {
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

  return { showHide, slideRight, slideDown, staggerCards };
};
