import React, { useState, useEffect } from 'react';

import { useScrollToTop } from '../../../../hooks/useScrollToTop';

import Button from '../../../../components/UI/button/Button';
import Svg from '../../../../components/UI/svg/Svg';

import './BackToTopButton.scss';

const BackToTopButton = () => {
  const { scrollToTop } = useScrollToTop();
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

  return (
    showButton && (
      <Button
        className='back-to-top__btn'
        onClick={() => scrollToTop('smooth')}
      >
        <Svg icon='chevron-up' />
      </Button>
    )
  );
};

export default BackToTopButton;
