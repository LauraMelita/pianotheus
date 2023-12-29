import React from 'react';
import { Routes, Route } from 'react-router-dom';

import {
  CollectionProvider,
  CollectionContext,
} from '../context/CollectionContext';

import Collection from '../pages/collectionPage/Collection';
import Details from '../pages/detailsPage/Details';

const MovieRoutes = () => {
  return (
    <CollectionProvider collectionName='movies' orderCollectionBy='title'>
      <Routes>
        <Route
          index
          element={
            <Collection
              title='Movies'
              context={CollectionContext}
              category='movies'
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

export default MovieRoutes;
