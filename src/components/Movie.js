import React from 'react';
import { useLocation } from 'react-router-dom';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';

import AnimatedBackground from './AnimatedBackground';
import Track from './Track';

import Icons from './../assets/icons.svg';
import './../styles/components/Movie.scss';

const Movie = () => {
  const location = useLocation();
  if (!location.state) return;
  const { data: imdbData, tracks } = location.state;

  return (
    <>
      <div className='movie-info'>
        <div className='header'>
          <h3 className='title'>{imdbData.title}</h3>
          <div className='rating-container'>
            <svg>
              <use href={`${Icons}#icon-imdb-star`} />
            </svg>
            <span className='rating'>{imdbData.rating.star}</span>
            <span className='number'>/10</span>
          </div>
        </div>
        <ul className='presentation'>
          <li className='releaseYear'>{imdbData.releaseDetailed.year}</li>
          <li className='content-rating'>{imdbData.contentRating}</li>
          <li className='runtime'>{imdbData.runtime}</li>
        </ul>
        <div className='inner-movie-container'>
          <div className='poster'>
            <img
              src={imdbData.image}
              alt={imdbData.title}
              width='200'
              height='200'
            />
          </div>

          <div className=''>
            <ul className='genres'>
              {imdbData.genre.map((genre, index) => (
                <li key={index}>{genre}</li>
              ))}
            </ul>
            <p className='plot'>{imdbData.plot}</p>
            <div className='top-credits'>
              <div className='directors'>
                Directors: {imdbData.top_credits[0].value.join(', ')}
              </div>
              <div className='Stars'>
                Actors: {imdbData.top_credits[2].value.join(', ')}
              </div>
            </div>
          </div>
        </div>

        <div className='tracks-container'>
          <div className='tracks'>
            {tracks.map((track, index) => (
              <Track
                key={index}
                movie={imdbData.title}
                title={track.title}
                difficultyLevel={track.difficultyLevel}
              />
            ))}
          </div>
        </div>
      </div>

      <div className='images'>
        {imdbData.images.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`${imdbData.title}${index}`}
            width='200'
            height='200'
          />
        ))}
      </div>

      <div className='imdb-rating'>
        <span></span>
        <br />
        <span>{(imdbData.rating.count * 0.001).toFixed(0)}K</span>
      </div>

      <a href={imdbData.imdb} target='_blank' rel='noreferrer'>
        <svg>
          <use href={`${Icons}#icon-imdb`} />
        </svg>
      </a>

      <div className='test'>
        <AspectRatio.Root ratio={16 / 9}>
          <iframe
            src={imdbData.trailer}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          />
        </AspectRatio.Root>
      </div>

      <AnimatedBackground />
    </>
  );
};

export default Movie;
