import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { convertToPath } from '../../../../utils/helpers';

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
          <img
            className='popout-card__background'
            src={backgroundImage}
            alt={`${title.toLocaleLowerCase()} card bg`}
          />
        </div>
        <img
          className='popout-card__character'
          src={popOutImage}
          alt={`${title.toLocaleLowerCase()} card character`}
        />
      </motion.div>
    </Link>
  );
};

export default PopOutCard;
