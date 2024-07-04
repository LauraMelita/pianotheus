import React from 'react';
import { motion } from 'framer-motion';

import Image from '../../../components/UI/image/Image';

import './ScreenshotThumbnails.scss';

const ScreenshotThumbnails = ({ screenshots, count, setCurrentSlideIndex }) => {
  const slicedScreenshots = screenshots.slice(0, count);

  const displayScreenshots =
    count >= screenshots.length ? screenshots : slicedScreenshots;

  const lastScreenshot =
    count >= screenshots.length ? screenshots.at(-1) : slicedScreenshots.at(-1);

  return (
    <ul className='preview'>
      {/* Display all images except for the last one: slice(0, -1) */}
      {displayScreenshots.slice(0, -1).map((screenshot, index) => (
        <li key={screenshot} onClick={() => setCurrentSlideIndex(index)}>
          <Image
            src={screenshot}
            alt='screenshot'
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          />
        </li>
      ))}

      {lastScreenshot && (
        <motion.li className='view-all' onClick={() => setCurrentSlideIndex(0)}>
          <Image src={lastScreenshot} alt='screenshot' />
          <span>{`View All Images (${screenshots.length})`}</span>
        </motion.li>
      )}
    </ul>
  );
};

export default ScreenshotThumbnails;
