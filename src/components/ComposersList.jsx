import React from 'react';
import { useLocation } from 'react-router-dom';

import { convertToPath } from '../utils/helpers';

import FadeIn from './UI/animation/fadeIn/FadeIn';
import CircleCard from './UI/card/circle/CircleCard';

import './ComposersList.scss';

const ComposersList = ({ data }) => {
  const { pathname } = useLocation();

  return (
    <FadeIn>
      <ul className='composers'>
        {data.map(({ id, composer, composerImg }) => (
          <li key={id}>
            <CircleCard
              path={`${pathname}/${convertToPath(composer)}`}
              cardWidth={180}
              cardHeight={180}
              fallbackDelay={600}
              title={composer}
              image={composerImg}
            />
            <span>{composer}</span>
          </li>
        ))}
      </ul>
    </FadeIn>
  );
};

export default ComposersList;
