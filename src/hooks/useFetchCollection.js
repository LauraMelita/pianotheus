import { useQuery } from '@tanstack/react-query';

import { fetchCollection } from '../utils/api';

export const useFetchCollection = (collectionName, orderCollectionBy) => {
  return useQuery({
    queryKey: [collectionName, collectionName, orderCollectionBy],
    queryFn: () => fetchCollection(collectionName, orderCollectionBy),
  });
};
