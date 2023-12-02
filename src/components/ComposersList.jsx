import React from 'react';
import { useLocation } from 'react-router-dom';

import { convertToPath } from '../utils/helpers';

import CircleCard from './UI/card/circle/CircleCard';

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
            hoverScale={1.02}
            width={180}
            height={180}
            fallbackDelay={600}
          />
          <span>{composer}</span>
        </li>
      ))}
    </ul>
  );
};

export default ComposersList;
