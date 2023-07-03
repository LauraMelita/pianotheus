import React from 'react';
import { Link } from 'react-router-dom';
import * as Avatar from '@radix-ui/react-avatar';

import './../styles/components/Card.scss';

const Card = ({ feature, path, image }) => {
  return (
    <>
      <Avatar.Root className='card'>
        <Link to={path}>
          <Avatar.Image className='card-image' src={image} alt={feature} />
        </Link>
        <Link to={path}>
          <Avatar.Fallback className='card-fallback' delayMs={600}>
            {feature}
          </Avatar.Fallback>
        </Link>
      </Avatar.Root>
    </>
  );
};

export default Card;
