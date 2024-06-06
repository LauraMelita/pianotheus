import React from 'react';
import { Link } from 'react-router-dom';
import * as Avatar from '@radix-ui/react-avatar';

import './CircleCard.scss';

const CircleCard = ({ path, fallbackDelay = 600, title, image }) => {
  return (
    <Avatar.Root>
      <div className='circle-card'>
        <Link to={path}>
          <Avatar.Image src={image} alt={title} />
        </Link>
        <Link to={path}>
          <Avatar.Fallback
            className='circle-card__fallback'
            delayMs={fallbackDelay}
          >
            {title}
          </Avatar.Fallback>
        </Link>
      </div>
    </Avatar.Root>
  );
};

export default CircleCard;
