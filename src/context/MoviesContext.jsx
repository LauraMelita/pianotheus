import { createContext } from 'react';

import { useFetchCollection } from '../hooks/useFetchCollection';

export const MoviesContext = createContext({
  data: {},
  isLoading: null,
  error: null,
});

export const MoviesContextProvider = (props) => {
  const {
    data,
    isLoading,
    isError: error,
  } = useFetchCollection('movies', 'title');

  return (
    <MoviesContext.Provider value={{ data, isLoading, error }}>
      {props.children}
    </MoviesContext.Provider>
  );
};
