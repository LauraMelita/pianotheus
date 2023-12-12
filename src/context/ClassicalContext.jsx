import { createContext } from 'react';

import { useFetchCollection } from '../hooks/useFetchCollection';

export const ClassicalContext = createContext({
  data: {},
  isLoading: null,
  error: null,
});

export const ClassicalContextProvider = (props) => {
  const {
    data,
    isLoading,
    isError: error,
  } = useFetchCollection('classical', 'composer');

  return (
    <ClassicalContext.Provider value={{ data, isLoading, error }}>
      {props.children}
    </ClassicalContext.Provider>
  );
};
