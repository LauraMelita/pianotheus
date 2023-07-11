import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MoviesPage from './../pages/MoviesPage';
import ComposersList from '../components/ComposersList';
import SearchBar from '../components/SearchBar';
import Composer from '../components/Composer';
import Movie from '../components/Movie';

import { movies } from '../data/movies';

const MovieRoutes = () => {
  return (
    <Routes>
      <Route index element={<MoviesPage />} />
      <Route path='composers'>
        <Route
          index
          element={<ComposersList contentType={'movies'} data={movies} />}
        />
        <Route path=':composer'>
          <Route
            index
            element={<Composer contentType={'movies'} data={movies} />}
          />
          <Route path=':movie' element={<Movie />} />
        </Route>
      </Route>
      <Route path='search' element={<SearchBar />} />
    </Routes>
  );
};

export default MovieRoutes;
