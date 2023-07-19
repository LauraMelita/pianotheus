import React from 'react';
import { motion } from 'framer-motion';

import Card from './Card.js';
import { convertToPath } from '../utils/helper.js';

import '../styles/components/ComposersList.scss';

const ComposersList = (props) => {
  return (
    <motion.div
      className='composers-container'
      initial={{ y: '100%' }}
      animate={{ y: '0%' }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      exit={{ opacity: 1 }}
    >
      <ul className='composers'>
        {props.data.map(({ id, composerName, profilePicture }) => (
          <li className='composer' key={id}>
            <Card
              feature={composerName}
              path={`/${props.contentType}/composers/${convertToPath(
                composerName
              )}`}
              image={profilePicture}
            />
            <motion.span
              className='name'
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {composerName}
            </motion.span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ComposersList;
