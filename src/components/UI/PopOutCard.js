import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { convertToPath } from '../../utils/helper';

import './PopOutCard.scss';

const PopOutCard = ({ category, backgroundImage, popOutImage }) => {
  return (
    <Link to={`/${convertToPath(category)}`}>
      <motion.div
        className='popout-card'
        whileHover={{
          scale: 1.1,
        }}
      >
        <div className='wrapper'>
          <img
            className='background-image'
            src={backgroundImage}
            alt={`${category.toLocaleLowerCase()} card bg`}
          />
        </div>
        <img
          className='character'
          src={popOutImage}
          alt={`${category.toLocaleLowerCase()} card popOut`}
        />
      </motion.div>
    </Link>
  );
};

export default PopOutCard;
