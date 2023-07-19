import React from 'react';
import { useLocation } from 'react-router-dom';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import * as Separator from '@radix-ui/react-separator';

import ScoresList from './ScoresList';

import Icons from '../assets/icons.svg';
import '../styles/components/Movie.scss';

const Movie = () => {
  const location = useLocation();
  if (!location.state) return;
  const { data: imdbData, scores } = location.state;

  return (
    <>
      <div className='movie-container'>
        <div className='movie-header'>
          <div className='left'>
            <div className='title-container'>
              <h3 className='title'>{imdbData.title}</h3>
              <a
                className='imdb-link'
                href={imdbData.imdb}
                target='_blank'
                rel='noreferrer'
              >
                <svg>
                  <use href={`${Icons}#icon-imdb`} />
                </svg>
              </a>
            </div>
            <ul className='general-info'>
              <li className='releaseYear'>{imdbData.releaseDetailed.year}</li>
              <li className='content-rating'>{imdbData.contentRating}</li>
              <li className='runtime'>{imdbData.runtime}</li>
            </ul>
          </div>
          <div className='right'>
            <p>IMDb RATING</p>
            <div className='rating-container'>
              <svg>
                <use href={`${Icons}#icon-imdb-star`} />
              </svg>
              <span className='rating'>{imdbData.rating.star}</span>
              <span className='number'>/10</span>
            </div>
          </div>
        </div>
        <div className='movie-body'>
          <div className='poster'>
            <img src={imdbData.image} alt={imdbData.title} />
          </div>
          <div className='trailer'>
            <AspectRatio.Root ratio={16 / 9}>
              <iframe
                title={imdbData.title}
                src={imdbData.trailer}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
              />
            </AspectRatio.Root>
          </div>
        </div>
        <div className='movie-footer'>
          <div className='text-container'>
            <p className='plot'>{imdbData.plot}</p>
            <Separator.Root
              className='separator'
              orientation='horizontal'
              decorative
            />
            <div className='director'>
              <span>Directors</span>
              <span>{imdbData.top_credits[0].value.join(', ')}</span>
            </div>
            <Separator.Root
              className='separator'
              orientation='horizontal'
              decorative
            />
            <div className='stars'>
              <span>Stars</span>
              <span>{imdbData.top_credits[2].value.join(', ')}</span>
            </div>
          </div>
          <ul className='genres'>
            {imdbData.genre.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* <div className='images'>
        {imdbData.images.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`${imdbData.title}${index}`}
            width='200'
            height='200'
          />
        ))}
      </div> */}

      <ScoresList scores={scores} imdbData={imdbData} />
    </>
  );
};

export default Movie;
