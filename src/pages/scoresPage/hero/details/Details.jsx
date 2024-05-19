import React from 'react';

import MovieDetails from './categories/MovieDetails';
import TVShowDetails from './categories/TVShowDetails';
import VideoGameDetails from './categories/VideoGameDetails';
import ClassicalDetails from './categories/ClassicalDetails';

import './Details.scss';

const categoriesMap = {
  movies: MovieDetails,
  'tv shows': TVShowDetails,
  'video games': VideoGameDetails,
  classical: ClassicalDetails,
};

const Details = ({ data }) => {
  const CategoryDetails = categoriesMap[data.category];

  return CategoryDetails && <CategoryDetails data={data} />;
};

export default Details;
