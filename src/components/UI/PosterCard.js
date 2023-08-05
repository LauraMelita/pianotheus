import React from 'react';
import { Link } from 'react-router-dom';
import * as Separator from '@radix-ui/react-separator';

import Icons from '../../assets/icons.svg';
import './PosterCard.scss';

const PosterCard = ({ title, path, poster, scores }) => {
  const scoresList = scores.map((score, index) => (
    <div className='score-list' key={index}>
      <svg>
        <use href={`${Icons}#icon-radio`} />
      </svg>
      <li>{score.score}</li>
    </div>
  ));

  return (
    <Link className='poster-card' to={path}>
      <figure>
        <img src={poster} alt={`${title} poster`} />
        <figcaption>
          <h3>Scores</h3>
          <Separator.Root
            className='separator'
            orientation='horizontal'
            decorative
          />
          {scoresList}
        </figcaption>
      </figure>
    </Link>
  );
};

export default PosterCard;
