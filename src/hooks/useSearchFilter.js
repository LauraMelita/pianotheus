import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import {
  useGetCollectionFilters,
  useSearchFilterCollection,
} from '../services/reactQuery/queries';
import { useCollectionContext } from '../context/CollectionContext';
import { useDebounce } from './useDebounce';

import { isObjectEmpty } from '../utils/helpers';
import { formatList } from '../utils/formatting';

export const useSearchFilter = () => {
  const { pathname } = useLocation();
  const { searchKeys } = useCollectionContext();

  // ============================================================
  // SEARCH
  // ============================================================
  const [searchValue, setSearchValue] = useState('');

  const debouncedSearchValue = useDebounce(searchValue, 500);
  const searchBarPlaceholder = `Search by ${formatList(searchKeys)}`;

  const handleSearch = (e) => setSearchValue(e.target.value);
  const clearSearch = () => setSearchValue('');

  // ============================================================
  // FILTER
  // ============================================================
  const [selectedFilters, setSelectedFilters] = useState({});

  const hasSelectedFilters = !isObjectEmpty(selectedFilters);

  const handleSelectOption = (value, filterKey) => {
    setSelectedFilters((prev) => {
      if (value === 'all') {
        const { [filterKey]: _, ...rest } = prev;
        return rest;
      } else {
        return {
          ...prev,
          [filterKey]: value,
        };
      }
    });
  };

  const clearFilters = () => setSelectedFilters({});

  // ============================================================
  // QUERIES
  // ============================================================
  const { data: filterOptions } = useGetCollectionFilters();

  const {
    data: searchResults,
    isLoading: isSearching,
    refetch: searchCollection,
  } = useSearchFilterCollection(debouncedSearchValue, selectedFilters);

  // ============================================================
  // SEARCH AND FILTER
  // ============================================================

  const shouldShowSearchResults = !!searchValue || hasSelectedFilters;

  const clearSearchAndFilters = () => {
    clearSearch();
    clearFilters();
  };

  // ============================================================
  // USEFFECTS
  // ============================================================

  // Clear the search and the filters on route change
  useEffect(() => {
    clearSearchAndFilters();
  }, [pathname]);

  // Search the collection whenever the debounced search value or selected filters change
  // searchCollection() could be called on button click instead
  useEffect(() => {
    if (!!searchValue || hasSelectedFilters) searchCollection();
  }, [debouncedSearchValue, selectedFilters]);

  return {
    searchValue,
    debouncedSearchValue,
    searchBarPlaceholder,
    handleSearch,
    clearSearch,
    selectedFilters,
    hasSelectedFilters,
    handleSelectOption,
    clearFilters,
    filterOptions,
    searchResults,
    isSearching,
    shouldShowSearchResults,
    clearSearchAndFilters,
  };
};
