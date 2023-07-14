import React from 'react';
import { Link } from 'react-router-dom';

import useFetchImdbData from '../hooks/useFetchImdbData';
import { convertToPath } from '../utils/helper';

import Icons from './../assets/icons.svg';
import './../styles/components/MoviesList.scss';

const MoviesList = ({ composerName, movie, year, tracks }) => {
  const [imdbData, trailer, isLoading] = useFetchImdbData(movie, year);

  if (!imdbData || !trailer) return;

  const tracksList = tracks.map((track, index) => (
    <div className='track-list' key={index}>
      <svg>
        <use href={`${Icons}#icon-radio`} />
      </svg>
      <li>{track.title}</li>
    </div>
  ));

  return (
    <Link
      className='movie-card'
      to={`/movies/composers/${convertToPath(composerName)}/${convertToPath(
        movie
      )}`}
      state={{ data: { ...imdbData, trailer }, tracks }}
    >
      <figure>
        <img src={imdbData.image} alt={imdbData.title} />
        <figcaption className='track-list-container'>
          <h3>Tracks</h3>
          {tracksList}
        </figcaption>
      </figure>
    </Link>
  );
};

export default MoviesList;
