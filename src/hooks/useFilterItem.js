import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { CollectionContext } from '../context/CollectionContext';
import { convertToPath } from '../utils/formatting';

export const useFilterItem = (filterBy) => {
  const {
    data: collection,
    isLoading,
    isError,
    isSuccess,
  } = useContext(CollectionContext);
  const params = useParams();

  const URLParam = params[filterBy];

  const filteredItem = collection?.find(
    (item) => convertToPath(item[filterBy]) === URLParam
  );
  return { filteredItem, isLoading, isError, isSuccess };
};
