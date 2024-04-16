import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import { usePlayerContext } from '../../../context/PlayerContext';
import { useAnimations } from '../../../hooks/useAnimations';

import AudioPlayer from '../../../features/audioPlayer/AudioPlayer';

const Playbar = ({ data }) => {
  const { setCurrentSongs, isPlaying } = usePlayerContext();
  const { showHide } = useAnimations();

  useEffect(() => {
    setCurrentSongs(data?.scores);
  }, [data]);

  return (
    <motion.div
      className='player__container full-width'
      variants={showHide}
      initial='hidden'
      animate={isPlaying ? 'show' : 'hidden'}
    >
      <AudioPlayer data={data} />
    </motion.div>
  );
};

export default Playbar;
