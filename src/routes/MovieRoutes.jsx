import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { MoviesProvider, MoviesContext } from '../context/MoviesContext';

import Collection from '../pages/collection/Collection';
import Movie from '../pages/Movie';

const MovieRoutes = () => {
  return (
    <MoviesProvider>
      <Routes>
        <Route
          index
          element={
            <Collection title='Movies' type='movies' context={MoviesContext} />
          }
        />
        <Route path=':title'>
          <Route index element={<Movie />} />
        </Route>
      </Routes>
    </MoviesProvider>
  );
};

export default MovieRoutes;
