import { createContext } from 'react';

import { useFetchCollection } from '../hooks/useFetchCollection';

export const VideoGamesContext = createContext({
  data: {},
  isLoading: null,
  error: null,
});

export const VideoGamesContextProvider = (props) => {
  const {
    data,
    isLoading,
    isError: error,
  } = useFetchCollection('video-games', 'title');

  return (
    <VideoGamesContext.Provider value={{ data, isLoading, error }}>
      {props.children}
    </VideoGamesContext.Provider>
  );
};
