import { createContext } from 'react';

import { useFetchCollection } from '../hooks/useFetchCollection';

export const TVShowsContext = createContext({
  data: {},
  isLoading: null,
  error: null,
});

export const TVShowsContextProvider = (props) => {
  const {
    data,
    isLoading,
    isError: error,
  } = useFetchCollection('tv-shows', 'title');

  return (
    <TVShowsContext.Provider value={{ data, isLoading, error }}>
      {props.children}
    </TVShowsContext.Provider>
  );
};
