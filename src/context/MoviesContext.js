import { createContext } from 'react';

import { useFetchFirebaseCollection } from '../hooks/useFetchFirebaseCollection';

export const MoviesContext = createContext({
  data: {},
  isLoading: null,
  error: null,
});

export const MoviesContextProvider = (props) => {
  const { data, isLoading, error } = useFetchFirebaseCollection(
    'movies',
    'title'
  );

  return (
    <MoviesContext.Provider value={{ data, isLoading, error }}>
      {props.children}
    </MoviesContext.Provider>
  );
};
