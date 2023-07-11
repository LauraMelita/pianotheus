import React from 'react';

import CardCharacterPopOut from './CardCharacterPopOut';

import MoviesBg from './../assets/Content Types/movies-bg.jpg';
import MoviesBgPopOut from './../assets/Content Types/movies-bg-popout.webp';
import TVShowsBg from './../assets/Content Types/tv-shows-bg.jpg';
import TvShowBgPopOut from './../assets/Content Types/tv-shows-bg-popout.webp';
import VideoGamesBg from './../assets/Content Types/video-games-bg.webp';
import VideoGameBgPopOut from './../assets/Content Types/video-games-bg-popout.png';
import ClassicalBg from './../assets/Content Types/classical-bg.jpg';
import ClassicalBgPopOut from './../assets/Content Types/classical-bg-popout.webp';

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
    popOutImage: TvShowBgPopOut,
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
