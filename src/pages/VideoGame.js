import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { VideoGamesContext } from '../context/VideoGamesContext';
import { useUpdateDocumentTitle } from '../hooks/useUpdateDocumentTitle';
import { convertToPath } from '../utils/helper';

import PageNotFound from '../pages/PageNotFound';

const VideoGame = () => {
  const { data, isLoading, error } = useContext(VideoGamesContext);
  const { title } = useParams();

  const videoGameDetails = data?.find(
    (show) => convertToPath(show.title) === title
  );

  useUpdateDocumentTitle(
    videoGameDetails,
    `${videoGameDetails?.title} (${videoGameDetails?.year})`
  );

  return (
    <>
      {isLoading && <h3>Loading...</h3>}
      {videoGameDetails && !isLoading && !error && (
        <h3>{videoGameDetails.title}</h3>
      )}
      {!isLoading && !videoGameDetails && <PageNotFound />}
    </>
  );
};
export default VideoGame;