import React from 'react';

import PopOutCard from './UI/PopOutCard';

import MoviesBg from '../assets/content types/movies-bg.jpg';
import MoviesPopOut from '../assets/content types/movies-bg-popout.webp';
import TVShowsBg from '../assets/content types/tv-shows-bg.jpg';
// import TvShowPopOut from '../assets/content types/tv-shows-bg-popout.webp';
import VideoGamesBg from '../assets/content types/video-games-bg.webp';
import VideoGamePopOut from '../assets/content types/video-games-bg-popout.png';
import ClassicalBg from '../assets/content types/classical-bg.jpg';
import ClassicalPopOut from '../assets/content types/classical-bg-popout.webp';
import './HomeCategories.scss';

const CATEGORIES = [
  {
    category: 'Movies',
    backgroundImage: MoviesBg,
    popOutImage: MoviesPopOut,
  },
  {
    category: 'TV Shows',
    backgroundImage: TVShowsBg,
    // popOutImage: TvShowPopOut,
  },
  {
    category: 'Video Games',
    backgroundImage: VideoGamesBg,
    popOutImage: VideoGamePopOut,
  },
  {
    category: 'Classical Music',
    backgroundImage: ClassicalBg,
    popOutImage: ClassicalPopOut,
  },
];

const HomeCategories = () => {
  return (
    <div className='categories'>
      {CATEGORIES.map(({ category, backgroundImage, popOutImage }, index) => (
        <div key={index}>
          <PopOutCard
            category={category}
            backgroundImage={backgroundImage}
            popOutImage={popOutImage}
          />
          <span>{category}</span>
        </div>
      ))}
    </div>
  );
};

export default HomeCategories;
