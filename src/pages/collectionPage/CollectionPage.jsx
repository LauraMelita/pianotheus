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
import Filter from '../../features/filter/Filter';
import InfiniteResults from './results/InfiniteResults';
import SearchResults from './results/SearchResults';
import BackToTopButton from '../../features/navigation/button/backToTop/BackToTopButton';

import { siteConfig } from '../../utils/config';

import './CollectionPage.scss';

const CollectionPage = () => {
  const { collection, title, routeParam: searchField } = useCollectionContext();

  // ============================================================
  // FILTER
  // ============================================================

  // const { data: filterOptions } = useGetCollectionFilters();

  // const { data: filteredResults, refetch: filterCollection } =
  //   useFilterCollection('James Horner'); // pass selected filter here

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

  const [searchParams, setSearchParams] = useSearchParams({ q: '' });
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
        {/* <Filter options={filterOptions} /> */}
        {shouldShowSearchResults ? (
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
        )}
        <BackToTopButton />
      </div>
    </main>
  );
};

export default CollectionPage;
