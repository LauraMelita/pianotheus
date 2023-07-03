import React from 'react';
import ComposersList from '../components/ComposersList';

import { movies } from './../data/movies.js'; // To remove

const MoviesPage = () => {
  return <ComposersList musicGenre={'movies'} data={movies} />;
};

export default MoviesPage;
