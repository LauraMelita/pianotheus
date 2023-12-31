import React from 'react';

import { useQuickSearch } from '../../hooks/useQuickSearch';

import SearchBar from './searchBar/SearchBar';
import Dropdown from './dropdown/Dropdown';
import Suggestions from './suggestions/Suggestions';

import './QuickSearch.scss';

const QuickSearch = ({ searchKeys }) => {
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
    <div className='quick-search'>
      <SearchBar
        dataIsLoading={isLoading}
        value={searchInput}
        onChange={handleSearchInputChange}
        onKeyDown={handleKeyDownActions}
        onCloseBtnClick={clearSearch}
        showDropdown={showDropdown}
        searchInputEmpty={searchInputEmpty}
      />
      {showDropdown && (
        <Dropdown onOutsideClick={clearSearch}>
          {noSuggestions ? (
            <NoSuggestions />
          ) : (
            <Suggestions
              suggestionRef={suggestionRef}
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
