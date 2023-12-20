import { useQuery } from '@tanstack/react-query';

import { fetchCollection } from '../services/api';

export const useFetchCollection = (collectionName, orderCollectionBy) => {
  return useQuery({
    queryKey: [collectionName, collectionName, orderCollectionBy],
    queryFn: () => fetchCollection(collectionName, orderCollectionBy),
  });
};
