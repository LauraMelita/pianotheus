import React from 'react';

import { useAnimations } from '../../../hooks/useAnimations';

import Button from '../../../components/UI/button/Button';
import Image from '../../../components/UI/image/Image';

const CarouselIndicators = ({
  slides,
  currentSlideIndex,
  setCurrentSlideIndex,
}) => {
  const { highlight } = useAnimations();

  return (
    <div className='carousel__indicators'>
      {slides.map((item, index) => {
        const isActive = index === currentSlideIndex;
        return (
          <Button
            key={index}
            className={isActive && 'active'}
            onClick={() => setCurrentSlideIndex(index)}
            variants={highlight}
            initial='inactive'
            animate={isActive ? 'active' : 'inactive'}
          >
            <Image src={item} alt='screenshot indicator' />
          </Button>
        );
      })}
    </div>
  );
};

export default CarouselIndicators;
