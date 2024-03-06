import React from 'react';
import { Route } from 'react-router-dom';

import { CollectionProvider } from '../context/CollectionContext';

import ProtectedRoute from '../features/authentication/routing/ProtectedRoute';
import CollectionPage from '../pages/collectionPage/CollectionPage';
import DetailsPage from '../pages/detailsPage/DetailsPage';

import { siteConfig } from '../utils/config';

const CollectionRoutes = () => {
  return siteConfig.collections.map(({ collection, routeParam }) => (
    <Route key={collection} path={collection}>
      <Route
        index
        element={
          <ProtectedRoute>
            <CollectionProvider>
              <CollectionPage />
            </CollectionProvider>
          </ProtectedRoute>
        }
      />
      <Route
        path={`:${routeParam}`}
        element={
          <ProtectedRoute>
            <CollectionProvider>
              <DetailsPage />
            </CollectionProvider>
          </ProtectedRoute>
        }
      />
    </Route>
  ));
};

export default CollectionRoutes;
