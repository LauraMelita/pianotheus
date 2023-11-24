import React from 'react';

import PopOutCard from '../../../components/UI/card/popout/PopOutCard';

import { convertToPath } from '../../../utils/helper';

import MoviesBg from '../../../assets/contentTypes/movies-bg.jpg';
import MoviesPopOut from '../../../assets/contentTypes/movies-bg-popout.webp';
import TVShowsBg from '../../../assets/contentTypes/tv-shows-bg.jpg';
import TvShowPopOut from '../../../assets/contentTypes/tv-shows-bg-popout.webp';
import VideoGamesBg from '../../../assets/contentTypes/video-games-bg.webp';
import VideoGamePopOut from '../../../assets/contentTypes/video-games-bg-popout.png';
import ClassicalBg from '../../../assets/contentTypes/classical-bg.jpg';
import ClassicalPopOut from '../../../assets/contentTypes/classical-bg-popout.webp';
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
    popOutImage: TvShowPopOut,
  },
  {
    category: 'Video Games',
    backgroundImage: VideoGamesBg,
    popOutImage: VideoGamePopOut,
  },
  {
    category: 'Classical',
    backgroundImage: ClassicalBg,
    popOutImage: ClassicalPopOut,
  },
];

const HomeCategories = () => {
  return (
    <div className='categories-wrapper'>
      {CATEGORIES.map(({ category, backgroundImage, popOutImage }, index) => (
        <div key={index} className={convertToPath(category)}>
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
