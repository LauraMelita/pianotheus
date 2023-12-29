import React from 'react';
import { Routes, Route } from 'react-router-dom';

import {
  CollectionProvider,
  CollectionContext,
} from '../context/CollectionContext';

import Collection from '../pages/collectionPage/Collection';
import Details from '../pages/detailsPage/Details';

const VideoGameRoutes = () => {
  return (
    <CollectionProvider collectionName='video-games' orderCollectionBy='title'>
      <Routes>
        <Route
          index
          element={
            <Collection
              title='Video Games'
              context={CollectionContext}
              category='video-games'
            />
          }
        />
        <Route path=':title'>
          <Route index element={<Details filterKey='title' />} />
        </Route>
      </Routes>
    </CollectionProvider>
  );
};

export default VideoGameRoutes;
