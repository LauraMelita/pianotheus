import React from 'react';
import { useLocation } from 'react-router-dom';

import Track from './Track';

import Icons from './../assets/icons.svg';
import './../styles/components/Movie.scss';

const Movie = () => {
  const location = useLocation();
  return (
    <>
      <div className='movie-info'>
        <div className='header'>
          <h3 className='title'>{location.state.movie}</h3>
          <div className='rating-container'>
            <svg>
              <use href={`${Icons}#icon-imdb-star`} />
            </svg>
            <span className='rating'>{location.state.data.rating.star}</span>
            <span className='number'>/10</span>
          </div>
        </div>
        <ul className='presentation'>
          <li className='releaseYear'>{location.state.year}</li>
          <li className='content-rating'>
            {location.state.data.contentRating}
          </li>
          <li className='runtime'>{location.state.data.runtime}</li>
        </ul>
        <div className='inner-movie-container'>
          <div className='poster'>
            <img
              src={location.state.data.image}
              alt={location.state.movie}
              width='200'
              height='200'
            />
          </div>

          <div className=''>
            <ul className='genres'>
              {location.state.data.genre.map((genre, index) => (
                <li key={index}>{genre}</li>
              ))}
            </ul>
            <p className='plot'>{location.state.data.plot}</p>
            <div className='top-credits'>
              <div className='directors'>
                Directors: {location.state.data.top_credits[0].value.join(', ')}
              </div>
              <div className='Stars'>
                Actors: {location.state.data.top_credits[2].value.join(', ')}
              </div>
            </div>
          </div>
        </div>

        <div className='tracks-container'>
          <div className='tracks'>
            {location.state.tracks.map((track, index) => (
              <Track
                key={index}
                movie={location.state.movie}
                title={track.title}
                difficultyLevel={track.difficultyLevel}
              />
            ))}
          </div>
        </div>
      </div>

      <div className='images'>
        {location.state.data.images.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`${location.state.movie}${index}`}
            width='200'
            height='200'
          />
        ))}
      </div>

      <div className='imdb-rating'>
        <span></span>
        <br />
        <span>{(location.state.data.rating.count * 0.001).toFixed(0)}K</span>
      </div>

      <a href={location.state.data.imdb} target='_blank' rel='noreferrer'>
        <svg>
          <use href={`${Icons}#icon-imdb`} />
        </svg>
      </a>
    </>
  );
};

export default Movie;
