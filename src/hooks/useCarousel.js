import { debounce } from 'lodash';

const SCROLL_WHEEL_DELAY = 100;

export const useCarousel = (items, setCurrentSlideIndex) => {
  const slideBackward = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const slideForward = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') slideForward();
    if (e.key === 'ArrowLeft') slideBackward();
  };

  const handleMouseWheel = debounce((e) => {
    // Check if the delta is positive (scroll down) or negative (scroll up)
    // Delay the scrolling by 100ms for a better UX
    if (e.deltaY > 0) {
      slideForward();
    } else {
      slideBackward();
    }
  }, SCROLL_WHEEL_DELAY);

  return {
    slideBackward,
    slideForward,
    handleKeyDown,
    handleMouseWheel,
  };
};
