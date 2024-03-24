import React from 'react';
import { motion } from 'framer-motion';

import { useCarousel } from '../../hooks/useCarousel';
import { useResponsive } from '../../hooks/useResponsive';
import { useAnimations } from '../../hooks/useAnimations';

import Button from '../../components/UI/button/Button';
import Svg from '../../components/UI/svg/Svg';
import Image from '../../components/UI/image/Image';

import './Carousel.scss';

const Carousel = ({ items }) => {
  const { isMobile } = useResponsive();
  const { highlight } = useAnimations();
  const {
    currentSlideIndex,
    setCurrentSlideIndex,
    slideBackward,
    slideForward,
    handleKeyDown,
    handleMouseWheel,
  } = useCarousel(items);

  const CarouselSlide = () => {
    return (
      <div className='carousel__slides'>
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
        {items.map((item, index) => (
          <Image
            key={index}
            className='carousel__item'
            src={item}
            alt='carousel item'
            style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}
          />
        ))}
      </div>
    );
  };

  const CarouselButton = ({ className, icon, onClick }) => {
    if (!isMobile)
      return (
        <Button className={`carousel__btn ${className}`} onClick={onClick}>
          <motion.span className='circle' aria-hidden>
            <Svg icon={icon} />
          </motion.span>
        </Button>
      );
  };

  const CarouselIndicators = () => {
    return (
      <div className={`carousel__indicators ${isMobile ? 'mobile' : ''}`}>
        {items.map((item, index) => {
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

  return (
    <div
      className='carousel'
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onWheel={handleMouseWheel}
    >
      <div>
        <CarouselButton onClick={slideBackward} icon='chevron-left' />
        <CarouselSlide />
        <CarouselButton onClick={slideForward} icon='chevron-right' />
      </div>
      <div>
        <CarouselIndicators />
      </div>
    </div>
  );
};

export default Carousel;
