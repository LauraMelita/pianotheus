import React from 'react';
import { useFocusTrap } from '@mantine/hooks';

import { useCarousel } from '../../hooks/useCarousel';

import CarouselButton from './elements/CarouselButton';
import CarouselSlide from './elements/CarouselSlide';
import CarouselIndicators from './elements/CarouselIndicators';

import './Carousel.scss';

const Carousel = ({ items }) => {
  const {
    currentSlideIndex,
    setCurrentSlideIndex,
    slideBackward,
    slideForward,
    handleKeyDown,
    handleMouseWheel,
  } = useCarousel(items);
  const focusTrapRef = useFocusTrap();

  return (
    <div
      ref={focusTrapRef}
      className='carousel'
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onWheel={handleMouseWheel}
    >
      <div>
        <CarouselButton icon='chevron-left' onClick={slideBackward} />
        <CarouselSlide
          slides={items}
          slideBackward={slideBackward}
          slideForward={slideForward}
          currentSlideIndex={currentSlideIndex}
        />
        <CarouselButton icon='chevron-right' onClick={slideForward} />
      </div>

      <div>
        <CarouselIndicators
          slides={items}
          currentSlideIndex={currentSlideIndex}
          setCurrentSlideIndex={setCurrentSlideIndex}
        />
      </div>
    </div>
  );
};

export default Carousel;
