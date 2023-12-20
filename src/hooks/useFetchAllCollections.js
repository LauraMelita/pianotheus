import { useQueries } from '@tanstack/react-query';

import { fetchCollection } from '../services/api';

export const useFetchAllCollections = (collections) => {
  const collectionQueries = useQueries({
    queries: collections.map((collection) => {
      return {
        queryKey: [collection.name, collection.name, collection.orderBy],
        queryFn: () => fetchCollection(collection.name, collection.orderBy),
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
