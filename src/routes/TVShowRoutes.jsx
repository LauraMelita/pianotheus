import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { TVShowsContextProvider } from '../context/TVShowsContext';

import TVShowsCollection from '../pages/TVShowsCollection';
import TVShow from '../pages/TVShow';

const TVShowsRoutes = () => {
  return (
    <TVShowsContextProvider>
      <Routes>
        <Route index element={<TVShowsCollection />} />
        <Route path=':title'>
          <Route index element={<TVShow />} />
        </Route>
      </Routes>
    </TVShowsContextProvider>
  );
};

export default TVShowsRoutes;
