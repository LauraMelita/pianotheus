import React from 'react';
import { v4 as createId } from 'uuid';

import useFetchImdbData from '../hooks/useFetchImdbData';
import Track from './Track';

import Icons from '../assets/icons.svg';
import './../styles/components/Movie.scss';

const Movie = ({ movie, year, tracks }) => {
  const [imdbData] = useFetchImdbData(movie, year);

  if (!imdbData) return;

  return (
    <div className='movie-container'>
      <div className='movie-info'>
        <div className='header'>
          <h3 className='title'>{movie}</h3>
          <div className='rating-container'>
            <svg>
              <use href={`${Icons}#imdb-star-icon`} />
            </svg>
            <span className='rating'>{imdbData.rating.star}</span>
            <span className='number'>/10</span>
          </div>
        </div>
        <ul className='presentation'>
          <li className='releaseYear'>{year}</li>
          <li className='content-rating'>{imdbData.contentRating}</li>
          <li className='runtime'>{imdbData.runtime}</li>
        </ul>
        <div className='inner-movie-container'>
          <div className='poster'>
            <img src={imdbData.image} alt={movie} />
          </div>
          <div className='tracks-container'>
            {tracks.map((track) => (
              <Track
                key={createId()}
                movie={movie}
                title={track.title}
                difficultyLevel={track.difficultyLevel}
              />
            ))}
          </div>
        </div>
        <ul className='genres'>
          {imdbData.genre.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
        <p className='plot'>{imdbData.plot}</p>
      </div>

      <div className='rating'>
        <span></span>
      </div>

      {/* <div className='images'>
        {imdbData.images.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`${movie}${index}`}
            width='200'
            height='200'
          />
        ))}
      </div> */}

      <div className='imdb-rating'>
        <span></span>
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

      <a href={imdbData.imdb} target='_blank' rel='noreferrer'>
        <svg>
          <use href={`${Icons}#imdb-icon`} />
        </svg>
      </a>
    </div>
  );
};

export default Movie;
