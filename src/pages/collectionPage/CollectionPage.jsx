import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useCollectionContext } from '../../context/CollectionContext';
import {
  useSearchCollection,
  useGetInfiniteCollection,
  useGetCollectionFilters,
  useFilterCollection,
} from '../../services/reactQuery/queries';
import { useDebounce } from '../../hooks/useDebounce';

import Spinner from '../../components/UI/spinner/Spinner';
import ErrorPage from '../errorPage/ErrorPage';
import Search from '../../features/search/Search';
// import Filter from '../../features/filter/Filter';
import InfiniteResults from './results/InfiniteResults';
import SearchResults from './results/SearchResults';
import BackToTopButton from '../../features/navigation/button/backToTop/BackToTopButton';

import Select from '../../components/UI/select/Select';

import { siteConfig } from '../../utils/config';

import './CollectionPage.scss';
import FilterResults from './results/FilterResults';

const CollectionPage = () => {
  const { collection, title, routeParam: searchField } = useCollectionContext();

  // ============================================================
  // SEARCH PARAMS
  // ============================================================

  const [searchParams, setSearchParams] = useSearchParams({
    q: '',
    composer: '',
  });

  // ============================================================
  // FILTER
  // ============================================================

  const { data: filterOptions } = useGetCollectionFilters();

  console.log(filterOptions);

  const filterValue = searchParams.get('composer') || '';

  const {
    data: filteredResults,
    isFetching: isFilterFetching,
    refetch: filterCollection,
  } = useFilterCollection(filterValue);

  useEffect(() => {
    const filterSelected = filterValue !== '';
    const allSelected = filterValue === 'all';

    if (allSelected) clearFilterParam();

    if (filterSelected) filterCollection(filterValue);
  }, [filterValue]);

  const handleFilter = (e) => {
    const filterValue = e;

    setSearchParams(
      (prev) => {
        prev.set('composer', filterValue);
        return prev;
      },
      { replace: true }
    );
  };

  const clearFilterParam = () => {
    setSearchParams((prev) => {
      prev.delete('composer');
      return prev;
    });
  };

  const shouldShowFilterResults = !!filterValue;

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

  useEffect(() => {
    const searchValueNotEmpty = searchValue !== '';

    if (searchValueNotEmpty) searchCollection();
  }, [debouncedSearchValue]);

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
          placeholder={`Search by ${searchField}`}
          value={searchValue}
          onChange={handleSearch}
          clearSearch={clearSearchParam}
          searchInputEmpty={searchInputEmpty}
        />

        <Select
          options={filterOptions[0]}
          value={filterValue}
          onChange={handleFilter}
          clearFilter={clearFilterParam}
        />

        {/* {shouldShowSearchResults ? (
          <SearchResults
            data={searchResults}
            isSearchFetching={isSearchFetching}
          />
        ) : (
          <InfiniteResults
            data={infiniteScrollResults}
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
          />
        )} */}

        {shouldShowFilterResults ? (
          <FilterResults
            isFilterFetching={isFilterFetching}
            data={filteredResults}
          />
        ) : (
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
