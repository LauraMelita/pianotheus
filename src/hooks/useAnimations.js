import { useScreenSize } from './useScreenSize';

export const useAnimations = () => {
  const { isMobile } = useScreenSize();

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

  return { showHide, slideRight, slideDown };
};
