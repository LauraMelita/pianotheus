import React from 'react';
import { useLocation } from 'react-router-dom';

import PosterCard from './UI/PosterCard';

import { convertToPath } from '../utils/helper';

import './TitlesList.scss';

const TitlesList = ({ data }) => {
  const { pathname } = useLocation();

  return (
    <ul className='titles'>
      {data.map(({ id, title, poster, scores }) => (
        <PosterCard
          key={id}
          title={title}
          poster={poster}
          scores={scores}
          path={`${pathname}/${convertToPath(title)}`}
        />
      ))}
    </ul>
  );
};

export default TitlesList;
