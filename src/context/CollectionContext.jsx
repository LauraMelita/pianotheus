import { createContext } from 'react';

import { useFetchCollection } from '../hooks/useFetchCollection';

export const CollectionContext = createContext({
  data: {},
  isLoading: null,
  isError: null,
  isSuccess: null,
});

export const CollectionProvider = ({
  collectionName,
  orderCollectionBy,
  children,
}) => {
  const { data, isLoading, isError, isSuccess } = useFetchCollection(
    collectionName,
    orderCollectionBy
  );

  return (
    <CollectionContext.Provider value={{ data, isLoading, isError, isSuccess }}>
      {children}
    </CollectionContext.Provider>
  );
};
