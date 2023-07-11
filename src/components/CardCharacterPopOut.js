import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { convertToPath } from '../utils/helper';

import './../styles/components/CardCharacterPopOut.scss';

const CardCharacterPopOut = ({ contentType, backgroundImage, popOutImage }) => {
  return (
    <Link to={`/${convertToPath(contentType)}`}>
      <motion.div
        className='character-popout-card'
        whileHover={{
          scale: 1.1,
        }}
      >
        <div className='wrapper'>
          <img
            className='cover-image'
            src={backgroundImage}
            alt={contentType}
          />
        </div>
        <img className='character' src={popOutImage} />
      </motion.div>
    </Link>
  );
};

export default CardCharacterPopOut;
