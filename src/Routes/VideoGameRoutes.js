import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { VideoGamesContextProvider } from '../context/VideoGamesContext';

import VideoGamesCollection from '../pages/VideoGamesCollection';
import VideoGame from '../pages/VideoGame';

const VideoGameRoutes = () => {
  return (
    <VideoGamesContextProvider>
      <Routes>
        <Route index element={<VideoGamesCollection />} />
        <Route path=':title'>
          <Route index element={<VideoGame />} />
        </Route>
      </Routes>
    </VideoGamesContextProvider>
  );
};

export default VideoGameRoutes;
