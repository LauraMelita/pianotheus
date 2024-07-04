import React from 'react';
import { useFocusTrap } from '@mantine/hooks';

import { useResponsive } from '../../hooks/useResponsive';
import { useCarousel } from '../../hooks/useCarousel';

import CarouselButton from './elements/CarouselButton';
import CarouselSlide from './elements/CarouselSlide';
import CarouselIndicators from './elements/CarouselIndicators';

import './Carousel.scss';

const Carousel = ({
  items,
  currentSlideIndex,
  setCurrentSlideIndex,
  aspectRatio,
}) => {
  const focusTrapRef = useFocusTrap();
  const { isMobile, isTablet } = useResponsive();
  const { slideBackward, slideForward, handleKeyDown, handleMouseWheel } =
    useCarousel(items, setCurrentSlideIndex);

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
          aspectRatio={aspectRatio}
          slideBackward={slideBackward}
          slideForward={slideForward}
          currentSlideIndex={currentSlideIndex}
        />
        <CarouselButton icon='chevron-right' onClick={slideForward} />
      </div>

      <div>
        {!(isMobile || isTablet) && (
          <CarouselIndicators
            slides={items}
            currentSlideIndex={currentSlideIndex}
            setCurrentSlideIndex={setCurrentSlideIndex}
          />
        )}
      </div>
    </div>
  );
};

export default Carousel;
