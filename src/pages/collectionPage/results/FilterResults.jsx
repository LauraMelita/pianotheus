import React from 'react';

import Spinner from '../../../components/UI/spinner/Spinner';
import CollectionList from '../collection/CollectionList';
import CollectionItems from '../collection/CollectionItems';

const FilterResults = ({ isFilterFetching, data }) => {
  const filteredResults = data && data.length > 0;
  const noFilteredResults = data && data.length === 0;

  if (isFilterFetching) return <Spinner type='circle' />;

  if (filteredResults)
    return (
      <CollectionList id='filter-results'>
        <CollectionItems data={data} />
      </CollectionList>
    );

  if (noFilteredResults)
    return <h1 className='no-results'>No results found</h1>;
};

export default FilterResults;
