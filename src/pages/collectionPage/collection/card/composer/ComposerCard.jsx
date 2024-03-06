import React from 'react';
import { motion } from 'framer-motion';

import CircleCard from '../../../../../components/UI/card/circle/CircleCard';

import './ComposerCard.scss';

const ComposerCard = ({ index, path, title, composerImg }) => {
  return (
    <motion.li className='composer-card' index={index}>
      <CircleCard path={path} title={title} image={composerImg} />
      <span>{title}</span>
    </motion.li>
  );
};

export default ComposerCard;
