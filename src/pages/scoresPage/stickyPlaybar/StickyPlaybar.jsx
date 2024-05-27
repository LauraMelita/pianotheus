import React from 'react';
import { motion } from 'framer-motion';

import { useAudioPlayer } from '../../../hooks/useAudioPlayer';
import { useAnimations } from '../../../hooks/useAnimations';

import Button from '../../../components/UI/button/Button';
import Svg from '../../../components/UI/svg/Svg';

import './StickyPlaybar.scss';

const StickyPlaybar = ({ children }) => {
  const { showPlaybar, closePlaybar } = useAudioPlayer();
  const { showHide } = useAnimations();

  return (
    <motion.div
      className='player__container full-width'
      variants={showHide}
      initial='hidden'
      animate={showPlaybar ? 'show' : 'hide'}
    >
      <Button onClick={closePlaybar} className='close-btn' aria-label='close'>
        <Svg icon='close' />
      </Button>
      {children}
    </motion.div>
  );
};

export default StickyPlaybar;
