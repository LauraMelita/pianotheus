import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { VideoGamesContext } from '../context/VideoGamesContext';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { convertToPath } from '../utils/helpers';

import Spinner from '../components/UI/spinner/Spinner';
import PageNotFound from './error/PageNotFound';

const VideoGame = () => {
  const { data, isLoading, error } = useContext(VideoGamesContext);
  const { title } = useParams();

  const videoGameDetails = data?.find(
    (show) => convertToPath(show.title) === title
  );

  useDocumentTitle(
    videoGameDetails,
    `${videoGameDetails?.title} (${videoGameDetails?.year})`
  );

  return (
    <main>
      {isLoading && <Spinner type='circle' />}
      {videoGameDetails && !isLoading && !error && (
        <h3>{videoGameDetails.title}</h3>
      )}
      {!isLoading && !videoGameDetails && <PageNotFound />}
    </main>
  );
};
export default VideoGame;
