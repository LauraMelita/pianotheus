import React from 'react';

import { useAudioPlayer } from '../../../hooks/useAudioPlayer';

import Modal from '../../../components/UI/modal/Modal';
import Button from '../../../components/UI/button/Button';
import Svg from '../../../components/UI/svg/Svg';
import Video from '../../../components/UI/video/Video';

const PlayYoutubeTutorial = ({ title, videoKey }) => {
  const { handlePauseSong } = useAudioPlayer();

  return !videoKey ? (
    <span className='tutorial__btn disabled'>
      <Svg icon='youtube' />
    </span>
  ) : (
    <Modal
      className='youtube'
      isBackgroundOverlay
      closeBtnVariant='ghost'
      triggerComponent={
        <Button
          className='tutorial__btn'
          onClick={handlePauseSong}
          whileHover={{ scale: 1.1 }}
        >
          <Svg icon='youtube' />
        </Button>
      }
    >
      <Video title={title} videoKey={videoKey} autoPlay />
    </Modal>
  );
};

export default PlayYoutubeTutorial;
