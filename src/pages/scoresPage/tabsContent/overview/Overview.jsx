import React from 'react';

import MovieOverview from './categories/MovieOverview';
import TVShowOverview from './categories/TVShowOverview';
import VideoGameOverview from './categories/VideoGameOverview';
import ClassicalOverview from './categories/ClassicalOverview';

import './Overview.scss';

const categoriesMap = {
  movies: MovieOverview,
  'tv shows': TVShowOverview,
  'video games': VideoGameOverview,
  classical: ClassicalOverview,
};

const Overview = ({ data }) => {
  const CategoryOverview = categoriesMap[data.category];

  return CategoryOverview && <CategoryOverview data={data} />;
};

export default Overview;
