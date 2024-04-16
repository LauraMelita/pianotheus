import React from 'react';

import Image from '../../components/UI/image/Image';
import Modal from '../../components/UI/modal/Modal';
import Carousel from '../carousel/Carousel';

import './Screenshots.scss';

const Screenshots = ({ screenshots, count = 4 }) => {
  const slicedScreenshots = screenshots.slice(0, count);

  const displayScreenshots =
    count >= screenshots.length ? screenshots : slicedScreenshots;

  const lastScreenshot =
    count >= screenshots.length ? screenshots.at(-1) : slicedScreenshots.at(-1);

  const Preview = () => {
    return (
      <div className='preview'>
        {/* Display all images except for the last one: slice(0, -1) */}
        {displayScreenshots.slice(0, -1).map((screenshot) => (
          <div key={screenshot}>
            <Image src={screenshot} alt='screenshot' />
          </div>
        ))}

        {lastScreenshot && (
          <div className='view-all'>
            <Image src={lastScreenshot} alt='screenshot' />
            <span>View All</span>
          </div>
        )}
      </div>
    );
  };

  return (
    <Modal
      className='screenshots'
      isBackgroundOverlay
      triggerComponent={<Preview />}
    >
      <Carousel items={screenshots} />
    </Modal>
  );
};

export default Screenshots;
