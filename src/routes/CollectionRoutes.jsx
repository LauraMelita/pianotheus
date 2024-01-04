import React from 'react';
import { Route, Outlet } from 'react-router-dom';

import { CollectionProvider } from '../context/CollectionContext';
import { siteConfig } from '../utils/config';

import CollectionPage from '../pages/collectionPage/CollectionPage';
import DetailsPage from '../pages/detailsPage/DetailsPage';

const CollectionRoutes = () => {
  const RouteProvider = ({ collectionName, orderCollectionBy }) => {
    return (
      <CollectionProvider
        collectionName={collectionName}
        orderCollectionBy={orderCollectionBy}
      >
        <Outlet />
      </CollectionProvider>
    );
  };

  return siteConfig.collections.map(({ name, orderBy, path, params }) => (
    <Route
      key={name}
      element={
        <RouteProvider collectionName={name} orderCollectionBy={orderBy} />
      }
    >
      <Route path={path}>
        <Route index element={<CollectionPage />} />
        <Route
          path={`:${params}`}
          element={<DetailsPage filterKey={params} />}
        />
      </Route>
    </Route>
  ));
};

export default CollectionRoutes;
