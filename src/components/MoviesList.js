import React from 'react';
import { Link } from 'react-router-dom';
import * as Separator from '@radix-ui/react-separator';

import useFetchImdbData from '../hooks/useFetchImdbData';
import { convertToPath } from '../utils/helper';

import Icons from './../assets/icons.svg';
import '../styles/components/MoviesList.scss';

const MoviesList = ({ composerName, movie, year, scores }) => {
  const [imdbData, trailer, isLoading] = useFetchImdbData(movie, year);

  if (!imdbData || !trailer) return;

  const scoresList = scores.map((score, index) => (
    <div className='score-list' key={index}>
      <svg>
        <use href={`${Icons}#icon-radio`} />
      </svg>
      <li>{score.title}</li>
    </div>
  ));

  return (
    <Link
      className='movie-card'
      to={`/movies/composers/${convertToPath(composerName)}/${convertToPath(
        movie
      )}`}
      state={{ data: { ...imdbData, trailer }, scores }}
    >
      <figure>
        <img src={imdbData.image} alt={imdbData.title} />
        <figcaption className='score-list-container'>
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

export default MoviesList;
