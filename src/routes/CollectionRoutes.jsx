import React from 'react';
import { Route } from 'react-router-dom';

import { CollectionProvider } from '../context/CollectionContext';
import { PlayerProvider } from '../context/PlayerContext';

import ProtectedRoute from '../features/authentication/routing/ProtectedRoute';
import CollectionPage from '../pages/collectionPage/CollectionPage';
import ScoresPage from '../pages/scoresPage/ScoresPage';

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
              <PlayerProvider>
                <ScoresPage />
              </PlayerProvider>
            </CollectionProvider>
          </ProtectedRoute>
        }
      />
    </Route>
  ));
};

export default CollectionRoutes;
