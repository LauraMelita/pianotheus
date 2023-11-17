import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as Avatar from '@radix-ui/react-avatar';

import './CircleCard.scss';

const CircleCard = ({ feature, path, image, width, height }) => {
  return (
    <>
      <Avatar.Root className='circle-card'>
        <motion.div
          whileHover={{ scale: 1.1 }}
          style={{ width: `${width}px`, height: `${height}px` }}
        >
          <Link to={path}>
            <Avatar.Image className='card-image' src={image} alt={feature} />
          </Link>
          <Link to={path}>
            <Avatar.Fallback className='card-fallback' delayMs={600}>
              {feature}
            </Avatar.Fallback>
          </Link>
        </motion.div>
      </Avatar.Root>
    </>
  );
};

export default CircleCard;
