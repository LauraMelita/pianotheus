import React from 'react';
import { Routes, Route, Outlet, useParams } from 'react-router-dom';

import { CollectionProvider } from '../context/CollectionContext';
import { PlayerProvider } from '../context/PlayerContext';
import { siteConfig } from '../utils/config';

import ProtectedRoute from '../features/authentication/routing/ProtectedRoute';
import CollectionPage from '../pages/collectionPage/CollectionPage';
import ScoresPage from '../pages/scoresPage/ScoresPage';
import ErrorPage from '../pages/errorPage/ErrorPage';

const Providers = () => {
  return (
    <ProtectedRoute>
      <CollectionProvider>
        <Outlet />
      </CollectionProvider>
    </ProtectedRoute>
  );
};

const CollectionRoutes = () => {
  const { collection: currentCollection } = useParams();

  const collectionConfig = siteConfig.collections.find(
    ({ collection }) => collection === currentCollection
  );

  if (collectionConfig) {
    const { routeParam } = collectionConfig;

    return (
      <Routes>
        <Route element={<Providers />}>
          <Route index element={<CollectionPage />} />
          <Route
            path={`:${routeParam}`}
            element={
              <PlayerProvider>
                <ScoresPage />{' '}
              </PlayerProvider>
            }
          />
          <Route path='*' element={<ErrorPage code='404' />} />
        </Route>
      </Routes>
    );
  } else {
    return <ErrorPage code='404' />;
  }
};

export default CollectionRoutes;
