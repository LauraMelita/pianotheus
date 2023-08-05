import { createContext } from 'react';

import { useFetchFirebaseCollection } from '../hooks/useFetchFirebaseCollection';

export const ClassicalContext = createContext({
  data: {},
  isLoading: null,
  error: null,
});

export const ClassicalContextProvider = (props) => {
  const { data, isLoading, error } = useFetchFirebaseCollection(
    'classical',
    'composer'
  );
  return (
    <ClassicalContext.Provider value={{ data, isLoading, error }}>
      {props.children}
    </ClassicalContext.Provider>
  );
};
