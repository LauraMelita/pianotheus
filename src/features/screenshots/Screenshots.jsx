import React from 'react';
import { motion } from 'framer-motion';

import Image from '../../components/UI/image/Image';
import Modal from '../../components/UI/modal/Modal';
import Carousel from '../carousel/Carousel';

import './Screenshots.scss';

const Screenshots = ({ screenshots, count = 6 }) => {
  const slicedScreenshots = screenshots.slice(0, count);

  const displayScreenshots =
    count >= screenshots.length ? screenshots : slicedScreenshots;

  const lastScreenshot =
    count >= screenshots.length ? screenshots.at(-1) : slicedScreenshots.at(-1);

  const Preview = () => {
    return (
      <ul className='preview'>
        {/* Display all images except for the last one: slice(0, -1) */}
        {displayScreenshots.slice(0, -1).map((screenshot) => (
          <li key={screenshot}>
            <Image
              src={screenshot}
              alt='screenshot'
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            />
          </li>
        ))}

        {lastScreenshot && (
          <motion.li className='view-all'>
            <Image src={lastScreenshot} alt='screenshot' />
            <span>{`View All Images (${screenshots.length})`}</span>
          </motion.li>
        )}
      </ul>
    );
  };

  return (
    <Modal
      className='screenshots'
      isBackgroundOverlay
      closeBtnVariant='ghost'
      triggerComponent={<Preview />}
    >
      <Carousel items={screenshots} aspectRatio='16 / 9' />
    </Modal>
  );
};

export default Screenshots;
