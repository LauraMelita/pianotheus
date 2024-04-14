import React from 'react';

import { useResponsive } from '../../../hooks/useResponsive';
import { useAnimations } from '../../../hooks/useAnimations';

import Button from '../../../components/UI/button/Button';
import Image from '../../../components/UI/image/Image';

const CarouselIndicators = ({
  slides,
  currentSlideIndex,
  setCurrentSlideIndex,
}) => {
  const { isMobile } = useResponsive();
  const { highlight } = useAnimations();

  return (
    <div className={`carousel__indicators ${isMobile ? 'mobile' : ''}`}>
      {slides.map((item, index) => {
        const isActive = index === currentSlideIndex;
        return (
          <Button
            key={index}
            className={isActive && 'active'}
            onClick={() => setCurrentSlideIndex(index)}
            variants={highlight}
            initial='inactive'
            animate={isActive && 'active'}
          >
            {!isMobile && <Image src={item} alt='preview' />}
          </Button>
        );
      })}
    </div>
  );
};

export default CarouselIndicators;
