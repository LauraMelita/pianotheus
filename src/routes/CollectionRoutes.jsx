import React from 'react';
import { Route } from 'react-router-dom';

import { CollectionProvider } from '../context/CollectionContext';
import { siteConfig } from '../utils/config';

import ProtectedRoute from '../features/authentication/ProtectedRoute';
import CollectionPage from '../pages/collectionPage/CollectionPage';
import DetailsPage from '../pages/detailsPage/DetailsPage';

const CollectionRoutes = () => {
  return siteConfig.collections.map(
    ({ collection, orderCollectionBy, collectionTitle, filterDocumentBy }) => (
      <Route
        key={collection}
        element={
          <CollectionProvider
            collection={collection}
            orderCollectionBy={orderCollectionBy}
            collectionTitle={collectionTitle}
            filterDocumentBy={filterDocumentBy}
          />
        }
      >
        <Route path={collection}>
          <Route
            index
            element={
              <ProtectedRoute>
                <CollectionPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={`:${filterDocumentBy}`}
            element={
              <ProtectedRoute>
                <DetailsPage />
              </ProtectedRoute>
            }
          />
        </Route>
      </Route>
    )
  );
};

export default CollectionRoutes;
