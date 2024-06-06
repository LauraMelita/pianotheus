import React from 'react';

import { useGetInfiniteCollection } from '../../services/reactQuery/queries';
import { useSearchFilter } from '../../hooks/useSearchFilter';

// import ErrorPage from '../errorPage/ErrorPage';
import HeaderControls from './header/HeaderControls';
import SearchBar from '../../features/search/SearchBar';
import Filters from '../../features/filter/Filters';
import InfiniteResults from './results/InfiniteResults';
import SearchResults from './results/SearchResults';
import BackToTopButton from '../../features/navigation/button/backToTop/BackToTopButton';

import { siteConfig } from '../../utils/config';

import './CollectionPage.scss';

const CollectionPage = () => {
  const {
    data: infiniteScrollResults,
    isLoading: isInfiniteScrollLoading,
    fetchNextPage,
    hasNextPage,
  } = useGetInfiniteCollection(siteConfig.infiniteScroll.resultsPerPage);

  const {
    searchValue,
    searchBarPlaceholder,
    handleSearch,
    clearSearch,
    selectedFilters,
    handleSelectOption,
    filterOptions,
    searchResults,
    isSearching,
    shouldShowSearchResults,
    clearSearchAndFilters,
  } = useSearchFilter();

  // TO DO: ERROR BOUNDARY
  //  if (isError && error) return <ErrorPage code='500' message={error.message} />;

  return (
    <main className='collection'>
      <HeaderControls>
        <SearchBar
          placeholder={searchBarPlaceholder}
          value={searchValue}
          onChange={handleSearch}
          clearSearch={clearSearch}
        />
        <Filters
          filterOptions={filterOptions}
          selectedOptions={selectedFilters}
          handleSelectOption={handleSelectOption}
        />
      </HeaderControls>
      <section>
        {shouldShowSearchResults ? (
          <SearchResults
            data={searchResults}
            isLoading={isSearching}
            searchTerm={searchValue}
            clearResults={clearSearchAndFilters}
          />
        ) : (
          <InfiniteResults
            data={infiniteScrollResults}
            isLoading={isInfiniteScrollLoading}
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
          />
        )}
      </section>
      <BackToTopButton />
    </main>
  );
};

export default CollectionPage;
