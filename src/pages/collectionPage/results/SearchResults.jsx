import React from 'react';

import Spinner from '../../../components/UI/spinner/Spinner';
import CollectionList from '../collection/CollectionList';
import CollectionItems from '../collection/CollectionItems';

const SearchResults = ({ isSearchFetching, data }) => {
  const searchResults = data && data.length > 0;
  const noSearchResults = data && data.length === 0;

  if (isSearchFetching) return <Spinner type='circle' />;

  if (searchResults)
    return (
      <CollectionList displayMode='search'>
        <CollectionItems data={data} />
      </CollectionList>
    );

  if (noSearchResults) return <h1>No results found</h1>;
};

export default SearchResults;
