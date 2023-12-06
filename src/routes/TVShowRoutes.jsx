import React from 'react';
import { Routes, Route } from 'react-router-dom';

import {
  TVShowsContextProvider,
  TVShowsContext,
} from '../context/TVShowsContext';

import Collection from '../pages/collection/Collection';
import TVShow from '../pages/TVShow';

const TVShowsRoutes = () => {
  return (
    <TVShowsContextProvider>
      <Routes>
        <Route
          index
          element={
            <Collection
              documentTitle='TV Shows'
              collectionName='tv-shows'
              context={TVShowsContext}
            />
          }
        />
        <Route path=':title'>
          <Route index element={<TVShow />} />
        </Route>
      </Routes>
    </TVShowsContextProvider>
  );
};

export default TVShowsRoutes;
