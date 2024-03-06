import React from 'react';

import Spinner from '../../../components/UI/spinner/Spinner';
import CollectionList from '../collection/CollectionList';
import CollectionItems from '../collection/CollectionItems';

const SearchResults = ({ isSearchFetching, isSearchLoading, data }) => {
  const searchResults = data && data.length > 0;
  const noSearchResults = data && data.length === 0;

  if (isSearchFetching || isSearchLoading) return <Spinner type='circle' />;

  if (searchResults)
    return (
      <CollectionList id='search-results'>
        <CollectionItems data={data} />
      </CollectionList>
    );

  if (noSearchResults) return <h1 className='no-results'>No results found</h1>;
};

export default SearchResults;
