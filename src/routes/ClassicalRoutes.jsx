import React from 'react';
import { Routes, Route } from 'react-router-dom';

import {
  CollectionProvider,
  CollectionContext,
} from '../context/CollectionContext';

import Collection from '../pages/collectionPage/Collection';
import Details from '../pages/detailsPage/Details';

const ClassicalRoutes = () => {
  return (
    <CollectionProvider collectionName='classical' orderCollectionBy='composer'>
      <Routes>
        <Route
          index
          element={
            <Collection
              title='Classical Music'
              context={CollectionContext}
              category='classical'
            />
          }
        />
        <Route path=':composer'>
          <Route index element={<Details filterKey='composer' />} />
        </Route>
      </Routes>
    </CollectionProvider>
  );
};

export default ClassicalRoutes;
