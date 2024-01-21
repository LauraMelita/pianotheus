import { createContext, useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { useGetCollection } from '../services/reactQuery/queries';

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
  const { data, isLoading, isError, error, isSuccess } = useGetCollection(
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
