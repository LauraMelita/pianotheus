import React from 'react';
import { Routes, Route } from 'react-router-dom';

import {
  VideoGamesContextProvider,
  VideoGamesContext,
} from '../context/VideoGamesContext';

import Collection from '../pages/collection/Collection';
import VideoGame from '../pages/VideoGame';

const VideoGameRoutes = () => {
  return (
    <VideoGamesContextProvider>
      <Routes>
        <Route
          index
          element={
            <Collection
              title='Video Games'
              type='video-games'
              context={VideoGamesContext}
            />
          }
        />
        <Route path=':title'>
          <Route index element={<VideoGame />} />
        </Route>
      </Routes>
    </VideoGamesContextProvider>
  );
};

export default VideoGameRoutes;
