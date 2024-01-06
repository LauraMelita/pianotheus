import { useQueries } from '@tanstack/react-query';

import { fetchCollection } from '../services/api';

export const useFetchAllCollections = (collections) => {
  const collectionQueries = useQueries({
    queries: collections.map(({ collection, orderCollectionBy }) => {
      return {
        queryKey: [collection, collection, orderCollectionBy],
        queryFn: () => fetchCollection(collection, orderCollectionBy),
      };
    }),
  });

  const isLoading = collectionQueries.every(
    (collection) => collection.isLoading === true
  );

  const data = collectionQueries.flatMap((collection) => collection.data);

  return {
    isLoading,
    data,
  };
};
