import { useQueries } from '@tanstack/react-query';

import { getCollection } from '../services/firebase/api';

export const useFetchAllCollections = (collections) => {
  const collectionQueries = useQueries({
    queries: collections.map(({ collection, orderCollectionBy }) => {
      return {
        queryKey: [collection, collection, orderCollectionBy],
        queryFn: () => getCollection(collection, orderCollectionBy),
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
