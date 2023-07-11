import React from 'react';
import { Link } from 'react-router-dom';

import useFetchImdbData from '../hooks/useFetchImdbData';

import { convertToPath } from '../utils/helper';

const MoviesList = ({ composerName, movie, year, tracks }) => {
  const [imdbData] = useFetchImdbData(movie, year);

  if (!imdbData) return;

  return (
    <div className='movie-container'>
      <Link
        to={`/movies/composers/${convertToPath(composerName)}/${convertToPath(
          movie
        )}`}
        state={{ data: imdbData, tracks }}
      >
        <h1>{imdbData.title}</h1>
        <img src={imdbData.image} alt={movie} height='200' width='200' />
      </Link>
    </div>
  );
};

export default MoviesList;
