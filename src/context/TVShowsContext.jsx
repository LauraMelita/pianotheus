import { createContext } from 'react';

import { useFetchCollection } from '../hooks/useFetchCollection';

export const TVShowsContext = createContext({
  data: {},
  isLoading: null,
  error: null,
});

export const TVShowsProvider = ({ children }) => {
  const {
    data,
    isLoading,
    isError: error,
  } = useFetchCollection('tv-shows', 'title');

  return (
    <TVShowsContext.Provider value={{ data, isLoading, error }}>
      {children}
    </TVShowsContext.Provider>
  );
};
