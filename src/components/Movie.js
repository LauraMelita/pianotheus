import React from 'react';
import { v4 as createId } from 'uuid';

import Track from './Track';
import useFetchImdbData from '../hooks/useFetchImdbData';

import Icons from '../assets/icons.svg';
import './../styles/components/Movie.scss';

const Movie = ({ movie, year, tracks }) => {
  const [imdbData] = useFetchImdbData(movie, year);

  if (!imdbData) return;
  console.log(imdbData);

  // const directors = imdbData.top_credits[0].map((director) =>
  //   console.log(director)
  // );

  console.log(imdbData.top_credits[0].value.join(', '));

  return (
    <div className='movie-container'>
      <h3 className='movie-title'>{movie}</h3>

      <ul>
        <li>{year}</li>
        <li>{imdbData.contentRating}</li>
        <li>{imdbData.runtime}</li>
      </ul>

      <div className='rating'>
        <span></span>
      </div>

      <div className='genre'>
        {imdbData.genre.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </div>

      <div className='images'>
        {imdbData.images.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`${movie}${index}`}
            width='200'
            height='200'
          />
        ))}
      </div>

      <p className='plot'>{imdbData.plot}</p>

      <div className='imdb-rating'>
        <span>{imdbData.rating.star}/10</span>
        <br />
        <span>{(imdbData.rating.count * 0.001).toFixed(0)}K</span>
      </div>

      <div className='top-credits'>
        <div className='directors'>
          Directors: {imdbData.top_credits[0].value.join(', ')}
        </div>
        <div className='Stars'>
          Actors: {imdbData.top_credits[2].value.join(', ')}
        </div>
      </div>

      <img src={imdbData.image} alt={movie} width='200' height='200' />

      <a href={imdbData.imdb} target='_blank' rel='noreferrer'>
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
