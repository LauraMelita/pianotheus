import React from 'react';

import Image from '../../../components/UI/image/Image';

const CarouselSlide = ({
  slides,
  aspectRatio,
  slideBackward,
  slideForward,
  currentSlideIndex,
}) => {
  return (
    <div className='carousel__slides' style={{ aspectRatio }}>
      <div
        className='carousel__navigation backward'
        onClick={slideBackward}
        aria-hidden
      />
      <div
        className='carousel__navigation forward'
        onClick={slideForward}
        aria-hidden
      />
      {slides.map((slide, index) => (
        <Image
          key={index}
          className='carousel__slide'
          src={slide}
          alt='carousel slide'
          style={{
            transform: `translateX(-${currentSlideIndex * 100}%)`,
            aspectRatio,
          }}
        />
      ))}
    </div>
  );
};

export default CarouselSlide;
