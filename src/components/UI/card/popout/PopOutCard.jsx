import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { convertToPath } from '../../../../utils/helpers';

import './PopOutCard.scss';

const PopOutCard = ({
  category,
  backgroundImage,
  popOutImage,
  minWidth,
  minHeight,
  hoverScale,
}) => {
  return (
    <Link to={`/${convertToPath(category)}`}>
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
            alt={`${category.toLocaleLowerCase()} card bg`}
          />
        </div>
        <img
          className='popout-card__character'
          src={popOutImage}
          alt={`${category.toLocaleLowerCase()} card character`}
        />
      </motion.div>
    </Link>
  );
};

export default PopOutCard;
