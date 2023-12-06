import React from 'react';
import { Routes, Route } from 'react-router-dom';

import {
  ClassicalContextProvider,
  ClassicalContext,
} from '../context/ClassicalContext';

import Collection from '../pages/collection/Collection';
import Classical from '../pages/Classical';

const ClassicalRoutes = () => {
  return (
    <ClassicalContextProvider>
      <Routes>
        <Route
          index
          element={
            <Collection
              documentTitle='Classical Music'
              collectionName='classical'
              context={ClassicalContext}
            />
          }
        />
        <Route path=':composer'>
          <Route index element={<Classical />} />
        </Route>
      </Routes>
    </ClassicalContextProvider>
  );
};

export default ClassicalRoutes;
