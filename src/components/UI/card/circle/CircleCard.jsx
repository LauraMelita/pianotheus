import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as Avatar from '@radix-ui/react-avatar';

import './CircleCard.scss';

const CircleCard = ({
  feature,
  path,
  image,
  imageScale,
  width,
  height,
  fallbackDelay,
}) => {
  return (
    <Avatar.Root className='circle-card'>
      <motion.div
        whileHover={{ scale: imageScale }}
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        <Link to={path}>
          <Avatar.Image src={image} alt={feature} />
        </Link>
        <Link to={path}>
          <Avatar.Fallback
            className='circle-card__fallback'
            delayMs={fallbackDelay}
          >
            {feature}
          </Avatar.Fallback>
        </Link>
      </motion.div>
    </Avatar.Root>
  );
};

export default CircleCard;
