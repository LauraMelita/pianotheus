import React from 'react';
import { useFocusTrap } from '@mantine/hooks';

import { useResponsive } from '../../hooks/useResponsive';
import { useQuickSearch } from '../../hooks/useQuickSearch';

import SearchBar from './searchBar/SearchBar';
import Dropdown from './dropdown/Dropdown';
import Suggestions from './suggestions/Suggestions';

import './QuickSearch.scss';

const QuickSearch = ({ className, searchKeys = ['title', 'composer'] }) => {
  const { isMobile } = useResponsive();
  const focusTrapRef = useFocusTrap();
  const {
    showDropdown,
    searchInput,
    suggestions,
    activeSuggestion,
    isLoading,
    suggestionRef,
    searchInputEmpty,
    noSuggestions,
    clearSearch,
    handleSearchInputChange,
    handleKeyDownActions,
    handleSuggestionClick,
    handleSuggestionHover,
  } = useQuickSearch(searchKeys);

  const NoSuggestions = () => (
    <span className='no-suggestions'>No results found</span>
  );

  return (
    <div
      ref={isMobile ? focusTrapRef : null}
      className={className ? `quick-search ${className}` : `quick-search`}
    >
      <SearchBar
        dataIsLoading={isLoading}
        value={searchInput}
        onChange={handleSearchInputChange}
        onKeyDown={handleKeyDownActions}
        clearSearch={clearSearch}
        showDropdown={showDropdown}
        searchInputEmpty={searchInputEmpty}
      />
      {showDropdown && (
        <Dropdown onOutsideClick={clearSearch}>
          {noSuggestions ? (
            <NoSuggestions />
          ) : (
            <Suggestions
              ref={suggestionRef}
              suggestions={suggestions}
              searchQuery={searchInput}
              active={activeSuggestion}
              handleSuggestionClick={handleSuggestionClick}
              handleSuggestionHover={handleSuggestionHover}
            />
          )}
        </Dropdown>
      )}
    </div>
  );
};

export default QuickSearch;
