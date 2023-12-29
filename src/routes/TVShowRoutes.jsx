import React from 'react';
import { Routes, Route } from 'react-router-dom';

import {
  CollectionProvider,
  CollectionContext,
} from '../context/CollectionContext';

import Collection from '../pages/collectionPage/Collection';
import Details from '../pages/detailsPage/Details';

const TVShowsRoutes = () => {
  return (
    <CollectionProvider collectionName='tv-shows' orderCollectionBy='title'>
      <Routes>
        <Route
          index
          element={
            <Collection
              title='TV Shows'
              context={CollectionContext}
              category='tv-shows'
            />
          }
        />
        <Route path=':title'>
          <Route index element={<Details filterKey='title' />} />
        </Route>
      </Routes>
    </CollectionProvider>
  );
};

export default TVShowsRoutes;
