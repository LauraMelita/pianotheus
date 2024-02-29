import React, { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useCollectionContext } from '../../context/CollectionContext';
import {
  useGetInfiniteCollection,
  useSearchCollection,
  useGetCollectionFilters,
  useFilterCollection,
} from '../../services/reactQuery/queries';
import { useDebounce } from '../../hooks/useDebounce';

import Spinner from '../../components/UI/spinner/Spinner';
import ErrorPage from '../errorPage/ErrorPage';
import Search from '../../features/search/Search';
import Filter from '../../features/filter/Filter';
import InfiniteResults from './results/InfiniteResults';
import SearchResults from './results/SearchResults';
import FilterResults from './results/FilterResults';
import BackToTopButton from '../../features/navigation/button/backToTop/BackToTopButton';

import { siteConfig } from '../../utils/config';
import { formatList } from '../../utils/formatting';

import './CollectionPage.scss';

const CollectionPage = () => {
  const { collection, title, searchKeys, filterKeys } = useCollectionContext();
  const [searchParams, setSearchParams] = useSearchParams();

  // ============================================================
  // FILTER
  // ============================================================

  const { data: filters } = useGetCollectionFilters();

  const filterValues = useMemo(() => {
    return filterKeys.reduce((accumulator, { key }) => {
      accumulator[key] = searchParams.get(key) || '';
      return accumulator;
    }, {});
  }, [filterKeys, searchParams]);

  const {
    data: filteredResults,
    isFetching: isFilterFetching,
    refetch: filterCollection,
  } = useFilterCollection(filterValues);

  const hasSelectedFilters = Object.values(filterValues).some(
    (value) => typeof value === 'string' && value !== '' && value !== 'all'
  );

  useEffect(() => {
    if (hasSelectedFilters) {
      filterCollection(filterValues);
    }
  }, [hasSelectedFilters, filterValues, filterCollection]);

  // ============================================================
  // INFINITE SCROLL
  // ============================================================

  const {
    data: infiniteScrollResults,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
    error,
  } = useGetInfiniteCollection(siteConfig.infiniteScroll.resultsPerPage);

  // ============================================================
  // SEARCH
  // ============================================================

  const searchValue = searchParams.get('q') || '';

  const debouncedSearchValue = useDebounce(searchValue, 500);

  const {
    data: searchResults,
    isFetching: isSearchFetching,
    refetch: searchCollection,
  } = useSearchCollection(debouncedSearchValue);

  const searchInputEmpty = !searchValue;
  const shouldShowSearchResults = !!searchValue;

  const handleSearch = (e) => {
    const inputValue = e.target.value;

    setSearchParams(
      (prev) => {
        prev.set('q', inputValue);
        return prev;
      },
      { replace: true }
    );
  };

  const clearSearchParam = () => {
    setSearchParams((prev) => {
      prev.delete('q');
      return prev;
    });
  };

  useEffect(() => {
    const searchValueNotEmpty = searchValue !== '';

    if (searchInputEmpty) clearSearchParam();

    if (searchValueNotEmpty) searchCollection();
  }, [debouncedSearchValue]);

  // ============================================================
  // COMPONENT STUFF
  // ============================================================

  if (isLoading) return <Spinner type='circle' />;

  if (isError && error) return <ErrorPage code='500' message={error.message} />;

  return (
    <main className={collection}>
      <div className='collection__container'>
        <h2 className='header gradient-text'>{title}</h2>
        <Search
          placeholder={`Search by ${formatList(searchKeys)}`}
          value={searchValue}
          onChange={handleSearch}
          clearSearch={clearSearchParam}
          searchInputEmpty={searchInputEmpty}
        />

        <Filter
          filters={filters}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />

        {shouldShowSearchResults && (
          <SearchResults
            data={searchResults}
            isSearchFetching={isSearchFetching}
          />
        )}

        {hasSelectedFilters && (
          <FilterResults
            isFilterFetching={isFilterFetching}
            data={filteredResults}
          />
        )}

        {!shouldShowSearchResults && !hasSelectedFilters && (
          <InfiniteResults
            data={infiniteScrollResults}
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
          />
        )}

        <BackToTopButton />
      </div>
    </main>
  );
};

export default CollectionPage;
