import React from 'react';
import { Routes, Route } from 'react-router-dom';

import {
  ClassicalProvider,
  ClassicalContext,
} from '../context/ClassicalContext';

import Collection from '../pages/collection/Collection';
import Classical from '../pages/Classical';

const ClassicalRoutes = () => {
  return (
    <ClassicalProvider>
      <Routes>
        <Route
          index
          element={
            <Collection
              title='Classical Music'
              type='classical'
              context={ClassicalContext}
            />
          }
        />
        <Route path=':composer'>
          <Route index element={<Classical />} />
        </Route>
      </Routes>
    </ClassicalProvider>
  );
};

export default ClassicalRoutes;
