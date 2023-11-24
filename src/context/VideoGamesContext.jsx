import { createContext } from 'react';

import { useFetchFirebaseCollection } from '../hooks/useFetchFirebaseCollection';

export const VideoGamesContext = createContext({
  data: {},
  isLoading: null,
  error: null,
});

export const VideoGamesContextProvider = (props) => {
  const { data, isLoading, error } = useFetchFirebaseCollection(
    'video-games',
    'title'
  );

  return (
    <VideoGamesContext.Provider value={{ data, isLoading, error }}>
      {props.children}
    </VideoGamesContext.Provider>
  );
};
