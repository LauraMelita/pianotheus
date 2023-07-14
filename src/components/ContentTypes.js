import React from 'react';

import CardCharacterPopOut from './CardCharacterPopOut';

import MoviesBg from './../assets/content types/movies-bg.jpg';
import MoviesBgPopOut from './../assets/content types/movies-bg-popout.webp';
import TVShowsBg from './../assets/content types/tv-shows-bg.jpg';
import TvShowBgPopOut from './../assets/content types/tv-shows-bg-popout.webp';
import VideoGamesBg from './../assets/content types/video-games-bg.webp';
import VideoGameBgPopOut from './../assets/content types/video-games-bg-popout.png';
import ClassicalBg from './../assets/content types/classical-bg.jpg';
import ClassicalBgPopOut from './../assets/content types/classical-bg-popout.webp';

import './../styles/components/ContentTypes.scss';

const CATEGORIES = [
  {
    genre: 'Movies',
    backgroundImage: MoviesBg,
    popOutImage: MoviesBgPopOut,
  },
  {
    genre: 'TV Shows',
    backgroundImage: TVShowsBg,
    // popOutImage: TvShowBgPopOut,
  },
  {
    genre: 'Video Games',
    backgroundImage: VideoGamesBg,
    popOutImage: VideoGameBgPopOut,
  },
  {
    genre: 'Classical Music',
    backgroundImage: ClassicalBg,
    popOutImage: ClassicalBgPopOut,
  },
];

const ContentType = () => {
  return (
    <div className='content-types-container'>
      <div className='content-types'>
        {CATEGORIES.map(({ genre, backgroundImage, popOutImage }, index) => (
          <div className='type' key={index}>
            <CardCharacterPopOut
              contentType={genre}
              backgroundImage={backgroundImage}
              popOutImage={popOutImage}
            />
            <span>{genre}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentType;
