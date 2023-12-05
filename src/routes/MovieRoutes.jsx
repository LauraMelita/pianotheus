import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { MoviesContextProvider, MoviesContext } from '../context/MoviesContext';

import Collection from '../pages/collection/Collection';
import Movie from '../pages/Movie';

const MovieRoutes = () => {
  return (
    <MoviesContextProvider>
      <Routes>
        <Route
          index
          element={
            <Collection collectionName='movies' context={MoviesContext} />
          }
        />
        <Route path=':title'>
          <Route index element={<Movie />} />
        </Route>
      </Routes>
    </MoviesContextProvider>
  );
};

export default MovieRoutes;
