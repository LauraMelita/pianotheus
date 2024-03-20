import React, { useState } from 'react';

import Button from '../../components/UI/button/Button';
import Svg from '../../components/UI/svg/Svg';

import './Carousel.scss';

const Carousel = ({ items }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

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

  const handleKeyDownActions = (e) => {
    if (e.key === 'ArrowRight') slideForward();
    if (e.key === 'ArrowLeft') slideBackward();
  };

  const CarouselSlide = () => {
    return (
      <div className='carousel__container'>
        {items.map((item, index) => (
          <img
            key={index}
            className='carousel__item'
            style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}
            src={item}
            alt='carousel item'
          />
        ))}
      </div>
    );
  };

  const CarouselButton = ({ className, icon, onClick }) => {
    return (
      <Button
        className={`carousel__btn ${className}`}
        onClick={onClick}
        whileHover={{ scale: 1.1 }}
      >
        <span className='circle' aria-hidden='true'>
          <Svg icon={`chevron-${icon}`} />
        </span>
      </Button>
    );
  };

  const CarouselIndicators = () => {
    return (
      <div className='carousel__indicators'>
        {items.map((_, index) => (
          <Button
            key={index}
            className={index === currentSlideIndex && 'active'}
            onClick={() => setCurrentSlideIndex(index)}
            whileHover={{ scale: 1.1 }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className='carousel' tabIndex={0} onKeyDown={handleKeyDownActions}>
      <CarouselSlide />
      <CarouselButton className='prev' onClick={slideBackward} icon='left' />
      <CarouselButton className='next' onClick={slideForward} icon='right' />
      <CarouselIndicators />
    </div>
  );
};

export default Carousel;
