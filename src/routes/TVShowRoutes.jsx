import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { TVShowsProvider, TVShowsContext } from '../context/TVShowsContext';

import Collection from '../pages/collection/Collection';
import TVShow from '../pages/TVShow';

const TVShowsRoutes = () => {
  return (
    <TVShowsProvider>
      <Routes>
        <Route
          index
          element={
            <Collection
              title='TV Shows'
              type='tv-shows'
              context={TVShowsContext}
            />
          }
        />
        <Route path=':title'>
          <Route index element={<TVShow />} />
        </Route>
      </Routes>
    </TVShowsProvider>
  );
};

export default TVShowsRoutes;
