import React from 'react';
import { motion } from 'framer-motion';

import { useAudioPlayer } from '../../../hooks/useAudioPlayer';
import { useAnimations } from '../../../hooks/useAnimations';
import { useResponsive } from '../../../hooks/useResponsive';

import Button from '../../../components/UI/button/Button';
import Svg from '../../../components/UI/svg/Svg';

import './StickyPlaybar.scss';

const StickyPlaybar = ({ children }) => {
  const { showPlaybar, closePlaybar } = useAudioPlayer();
  const { showHide } = useAnimations();
  const { isMobile } = useResponsive();

  return (
    <motion.div
      className='player__container full-width'
      variants={showHide}
      initial='hide'
      animate={showPlaybar ? 'show' : 'hide'}
    >
      {!isMobile && (
        <Button
          onClick={closePlaybar}
          className='close-btn'
          variant='icon'
          aria-label='close'
        >
          <Svg icon='close' />
        </Button>
      )}
      {children}
    </motion.div>
  );
};

export default StickyPlaybar;
