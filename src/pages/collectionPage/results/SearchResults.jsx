import React from 'react';

import Spinner from '../../../components/UI/spinner/Spinner';
import CollectionList from '../collection/CollectionList';
import CollectionItems from '../collection/CollectionItems';
import NoResults from '../../../features/search/noResults/NoResults';

const SearchResults = ({
  isSearchFetching,
  isSearchLoading,
  data,
  searchTerm,
  clearSearch,
}) => {
  const searchResults = data && data.length > 0;

  if (isSearchFetching || isSearchLoading) return <Spinner type='circle' />;

  return searchResults ? (
    <CollectionList id='search-results'>
      <CollectionItems data={data} />
    </CollectionList>
  ) : (
    <NoResults
      searchTerm={searchTerm}
      hasSearchSuggestions
      clearSearch={clearSearch}
    />
  );
};

export default SearchResults;
