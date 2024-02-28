import React from 'react';

import Spinner from '../../../components/UI/spinner/Spinner';
import CollectionList from '../collection/CollectionList';
import CollectionItems from '../collection/CollectionItems';

const FilterResults = ({ isFilterFetching, data }) => {
  const filterResults = data && data.length > 0;

  if (isFilterFetching) return <Spinner type='circle' />;

  if (filterResults)
    return (
      <CollectionList displayMode='filter'>
        <CollectionItems data={data} />
      </CollectionList>
    );
};

export default FilterResults;
