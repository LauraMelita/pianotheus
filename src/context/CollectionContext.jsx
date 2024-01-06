import { createContext, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { fetchCollection } from '../services/api';

const useFetchCollection = (collectionName, orderCollectionBy) => {
  return useQuery({
    queryKey: [collectionName, collectionName, orderCollectionBy],
    queryFn: () => fetchCollection(collectionName, orderCollectionBy),
    staleTime: Infinity,
  });
};

export const CollectionContext = createContext({
  collection: '',
  collectionTitle: '',
  filterKey: '',
  data: {},
  isLoading: null,
  error: null,
  isError: null,
  isSuccess: null,
});

export const CollectionProvider = (props) => {
  const { data, isLoading, isError, error, isSuccess } = useFetchCollection(
    props.collection,
    props.orderCollectionBy
  );

  return (
    <CollectionContext.Provider
      value={{
        collection: props.collection,
        collectionTitle: props.collectionTitle,
        filterKey: props.filterDocumentBy,
        data,
        isLoading,
        isError,
        error,
        isSuccess,
      }}
    >
      <Outlet />
    </CollectionContext.Provider>
  );
};

export const useCollectionContext = () => useContext(CollectionContext);
