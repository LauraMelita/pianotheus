import React from 'react';

import Modal from '../../../components/UI/modal/Modal';
import Button from '../../../components/UI/button/Button';
import Svg from '../../../components/UI/svg/Svg';
import Video from '../../../components/UI/video/Video';

const PlayYoutubeTutorial = ({ title, videoKey }) => {
  if (!videoKey) return <span className='score__status'>N/A</span>;

  return (
    <Modal
      className='youtube'
      isBackgroundOverlay
      triggerComponent={
        <Button className='tutorial__btn'>
          <Svg icon='youtube' />
          {/* <span>Play Tutorial</span> */}
        </Button>
      }
    >
      <Video title={title} videoKey={videoKey} />
    </Modal>
  );
};

export default PlayYoutubeTutorial;
