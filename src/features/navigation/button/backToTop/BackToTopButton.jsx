import React, { useState, useEffect } from 'react';

import Button from '../../../../components/UI/button/Button';
import Svg from '../../../../components/UI/svg/Svg';

import './BackToTopButton.scss';

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If the user has scrolled outside of the current viewport
      if (window.scrollY > 0) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    showButton && (
      <Button
        variant='navigation'
        className='back-to-top__btn'
        onClick={scrollToTop}
      >
        <span className='circle' aria-hidden='true'>
          <Svg icon='chevron-up' />
        </span>
      </Button>
    )
  );
};

export default BackToTopButton;
