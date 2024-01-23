import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Image from '../../image/Image';

import { convertToPath } from '../../../../utils/formatting';

import './PopOutCard.scss';

const PopOutCard = ({
  title,
  backgroundImage,
  popOutImage,
  minHeight,
  minWidth,
  hoverScale,
}) => {
  return (
    <Link to={`/${convertToPath(title)}`}>
      <motion.div
        className='popout-card'
        style={{ minWidth, minHeight }}
        whileHover={{
          scale: hoverScale,
        }}
      >
        <div>
          <Image
            className='popout-card__background'
            src={backgroundImage}
            alt={`${title.toLocaleLowerCase()} card bg`}
          />
        </div>
        <Image
          className='popout-card__character'
          src={popOutImage}
          alt={`${title.toLocaleLowerCase()} card character`}
        />
      </motion.div>
    </Link>
  );
};

export default PopOutCard;
