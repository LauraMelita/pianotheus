import React from 'react';
import { Routes, Route } from 'react-router-dom';

import {
  CollectionProvider,
  CollectionContext,
} from '../context/CollectionContext';

import Collection from '../pages/collection/Collection';
import ItemDetails from '../pages/itemDetails/ItemDetails';

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
          <Route index element={<ItemDetails filterKey='title' />} />
        </Route>
      </Routes>
    </CollectionProvider>
  );
};

export default VideoGameRoutes;
