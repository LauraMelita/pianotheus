import { createContext } from 'react';

import { useFetchFirebaseCollection } from '../hooks/useFetchFirebaseCollection';

export const TVShowsContext = createContext({
  data: {},
  isLoading: null,
  error: null,
});

export const TVShowsContextProvider = (props) => {
  const { data, isLoading, error } = useFetchFirebaseCollection(
    'tv-shows',
    'title'
  );

  return (
    <TVShowsContext.Provider value={{ data, isLoading, error }}>
      {props.children}
    </TVShowsContext.Provider>
  );
};
