import React, { useState, useEffect, useCallback } from 'react';
import { v4 as createId } from 'uuid';

import Track from './Track';
import * as config from './../lib/config';

import Icons from '../assets/icons.svg';
import './../styles/components/Movie.scss';

const Movie = ({ movie, year, tracks }) => {
  const [imdbData, setImdbData] = useState(null);

  const fetchImdbDataHandler = useCallback(async () => {
    try {
      const response = await fetch(`${config.IMDB_URL}/?q=${movie}q=${year}`);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const rawData = await response.json();
      const data = {};

      for (const [key, value] of Object.entries(rawData.description[0])) {
        const fixedKey = key.toLocaleLowerCase().replace('#', '');
        data[fixedKey] = value;
      }

      setImdbData({
        title: data.title,
        poster: data.img_poster,
        url: data.imdb_url,
      });
    } catch (error) {
      console.error(error);
    }
  }, [movie]);

  useEffect(() => {
    fetchImdbDataHandler();
  }, [fetchImdbDataHandler]);

  if (!imdbData) return;

  return (
    <div className='movie-container'>
      <h3 className='movie-title'>
        {movie} ({year})
      </h3>
      <img src={imdbData.poster} alt={movie} width='200' height='200' />
      <a href={imdbData.url} target='_blank' rel='noreferrer'>
        <svg>
          <use href={`${Icons}#imdb-icon`} />
        </svg>
      </a>

      {tracks.map((track) => (
        <Track
          key={createId()}
          movie={movie}
          title={track.title}
          difficultyLevel={track.difficultyLevel}
        />
      ))}
    </div>
  );
};

export default Movie;
