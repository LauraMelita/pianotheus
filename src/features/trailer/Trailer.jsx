import React from 'react';

import Modal from '../../components/UI/modal/Modal';
import Video from '../../components/UI/video/Video';
import Thumbnail from '../../components/UI/video/Thumbnail';

import './Trailer.scss';

const Trailer = ({ title, videoKey }) => {
  return (
    <Modal
      className='youtube'
      isBackgroundOverlay
      triggerComponent={<Thumbnail videoKey={videoKey} />}
    >
      <Video title={title} videoKey={videoKey} autoPlay />
    </Modal>
  );
};

export default Trailer;
