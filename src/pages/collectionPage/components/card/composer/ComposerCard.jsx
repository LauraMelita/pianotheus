import React from 'react';
import { motion } from 'framer-motion';

import CircleCard from '../../../../../components/UI/card/circle/CircleCard';

import { useAnimations } from '../../../../../hooks/useAnimations';

import './ComposerCard.scss';

const ComposerCard = ({ cardIndex, path, title, composerImg }) => {
  const { staggerCards } = useAnimations();

  return (
    <motion.li
      className='composer'
      variants={staggerCards}
      custom={cardIndex}
      initial='hidden'
      animate='visible'
    >
      <CircleCard path={path} title={title} image={composerImg} />
      <span>{title}</span>
    </motion.li>
  );
};

export default ComposerCard;
