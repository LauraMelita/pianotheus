import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { ClassicalContextProvider } from '../context/ClassicalContext';

import ClassicalCollection from '../pages/ClassicalCollection';
import Classical from '../pages/Classical';

const ClassicalRoutes = () => {
  return (
    <ClassicalContextProvider>
      <Routes>
        <Route index element={<ClassicalCollection />} />
        <Route path=':composer'>
          <Route index element={<Classical />} />
        </Route>
      </Routes>
    </ClassicalContextProvider>
  );
};

export default ClassicalRoutes;
