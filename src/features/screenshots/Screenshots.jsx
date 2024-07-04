import React, { useState } from 'react';

import Modal from '../../components/UI/modal/Modal';
import ScreenshotThumbnails from './thumbnails/ScreenshotThumbnails';
import Carousel from '../carousel/Carousel';

const Screenshots = ({ screenshots, count = 6 }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  return (
    <Modal
      className='screenshots'
      isBackgroundOverlay
      closeBtnVariant='ghost'
      triggerComponent={
        <ScreenshotThumbnails
          screenshots={screenshots}
          count={count}
          setCurrentSlideIndex={setCurrentSlideIndex}
        />
      }
    >
      <Carousel
        items={screenshots}
        currentSlideIndex={currentSlideIndex}
        setCurrentSlideIndex={setCurrentSlideIndex}
        aspectRatio='16 / 9'
      />
    </Modal>
  );
};

export default Screenshots;
