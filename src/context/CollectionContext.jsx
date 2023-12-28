import { createContext } from 'react';

import { useFetchCollection } from '../hooks/useFetchCollection';

export const CollectionContext = createContext({
  data: {},
  isLoading: null,
  error: null,
});

export const CollectionProvider = ({
  collectionName,
  orderCollectionBy,
  children,
}) => {
  const {
    data,
    isLoading,
    isError: error,
  } = useFetchCollection(collectionName, orderCollectionBy);

  return (
    <CollectionContext.Provider value={{ data, isLoading, error }}>
      {children}
    </CollectionContext.Provider>
  );
};
