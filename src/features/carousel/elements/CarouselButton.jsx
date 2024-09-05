import React from 'react';
import { motion } from 'framer-motion';

import { useResponsive } from '../../../hooks/useResponsive';

import Button from '../../../components/UI/button/Button';
import Svg from '../../../components/UI/svg/Svg';

const CarouselButton = ({ icon, onClick }) => {
  const { isMobile } = useResponsive();

  if (!isMobile)
    return (
      <Button className='carousel__btn' onClick={onClick}>
        <motion.span className='circle' aria-hidden>
          <Svg icon={icon} />
        </motion.span>
      </Button>
    );
};

export default CarouselButton;
