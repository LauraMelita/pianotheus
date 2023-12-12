import { useQueries } from '@tanstack/react-query';

import { fetchCollection } from '../utils/api';

export const useFetchAllCollections = (collections) => {
  const collectionQueries = useQueries({
    queries: collections.map((collection) => {
      return {
        queryKey: [collection.name, collection.name, collection.orderBy],
        queryFn: () => fetchCollection(collection.name, collection.orderBy),
      };
    }),
  });

  return collectionQueries.flatMap((collection) => collection.data);
};
