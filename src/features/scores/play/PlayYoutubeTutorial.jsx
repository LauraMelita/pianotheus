import React from 'react';

import Modal from '../../../components/UI/modal/Modal';
import Button from '../../../components/UI/button/Button';
import Svg from '../../../components/UI/svg/Svg';
import Video from '../../../components/UI/video/Video';

const PlayYoutubeTutorial = ({ title, videoKey }) => {
  if (!videoKey) return;

  return (
    <Modal
      className='youtube'
      isBackgroundOverlay
      triggerComponent={
        <Button className='tutorial__btn'>
          <Svg icon='youtube' />
        </Button>
      }
    >
      <Video title={title} videoKey={videoKey} autoPlay />
    </Modal>
  );
};

export default PlayYoutubeTutorial;
