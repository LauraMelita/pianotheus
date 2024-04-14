import React from 'react';

import Movie from './categories/Movie';
import TVShow from './categories/TVShow';
import VideoGame from './categories/VideoGame';
import Classical from './categories/Classical';

import './CategoryDetails.scss';

const categoriesMap = {
  movies: Movie,
  'tv shows': TVShow,
  'video games': VideoGame,
  classical: Classical,
};

const CategoryDetails = ({ collection, data }) => {
  const Category = categoriesMap[data.category];

  return (
    <div className={`${collection} details`}>
      {Category && <Category data={data} />}
    </div>
  );
};

export default CategoryDetails;
