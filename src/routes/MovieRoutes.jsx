import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { MoviesContextProvider } from '../context/MoviesContext';

import MoviesCollection from '../pages/MoviesCollection';
import Movie from '../pages/Movie';

const MovieRoutes = () => {
  return (
    <MoviesContextProvider>
      <Routes>
        <Route index element={<MoviesCollection />} />
        <Route path=':title'>
          <Route index element={<Movie />} />
        </Route>
      </Routes>
    </MoviesContextProvider>
  );
};

export default MovieRoutes;
