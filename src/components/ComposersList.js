import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import { convertToPath } from '../utils/helper';

import CircleCard from './UI/CircleCard';

import './ComposersList.scss';

const ComposersList = ({ data }) => {
  const { pathname } = useLocation();

  return (
    <ul className='composers'>
      {data.map(({ id, composer, composerImg }) => (
        <li key={id}>
          <CircleCard
            feature={composer}
            path={`${pathname}/${convertToPath(composer)}`}
            image={composerImg}
          />
          <motion.span
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {composer}
          </motion.span>
        </li>
      ))}
    </ul>
  );
};

export default ComposersList;
