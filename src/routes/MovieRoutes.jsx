import React from 'react';
import { Routes, Route } from 'react-router-dom';

import {
  CollectionProvider,
  CollectionContext,
} from '../context/CollectionContext';

import Collection from '../pages/collection/Collection';
import ItemDetails from '../pages/itemDetails/ItemDetails';

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
          <Route index element={<ItemDetails filterKey='title' />} />
        </Route>
      </Routes>
    </CollectionProvider>
  );
};

export default MovieRoutes;
