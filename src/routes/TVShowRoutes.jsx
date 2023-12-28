import React from 'react';
import { Routes, Route } from 'react-router-dom';

import {
  CollectionProvider,
  CollectionContext,
} from '../context/CollectionContext';

import Collection from '../pages/collection/Collection';
import ItemDetails from '../pages/itemDetails/ItemDetails';

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
          <Route index element={<ItemDetails filterKey='title' />} />
        </Route>
      </Routes>
    </CollectionProvider>
  );
};

export default TVShowsRoutes;
