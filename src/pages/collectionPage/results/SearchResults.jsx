import React from 'react';

import Spinner from '../../../components/UI/spinner/Spinner';
import CollectionList from '../components/collection/CollectionList';
import CollectionItems from '../components/collection/CollectionItems';
import NoResults from '../../../features/search/noResults/NoResults';

const SearchResults = ({ data, isLoading, searchTerm, clearResults }) => {
  const hasResults = data?.length > 0;

  if (isLoading) return <Spinner type='circle' />;

  return hasResults ? (
    <CollectionList>
      <CollectionItems data={data} />
    </CollectionList>
  ) : (
    <NoResults searchTerm={searchTerm} clearSearch={clearResults} />
  );
};

export default SearchResults;
