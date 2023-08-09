import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Suggestions from './Suggestions';

import { convertToPath } from '../../utils/helper';

import Icons from '../../assets/icons.svg';
import './QuickSearch.scss';

import { movies } from '../../data/movies';
import { tvShows } from '../../data/tvShows';
import { videoGames } from '../../data/videoGames';
import { classical } from '../../data/classical';

const QuickSearch = () => {
  const data = [...movies, ...tvShows, ...videoGames, ...classical];

  const [suggestions, setSuggestions] = useState([]);
  const [suggestionIndex, setSuggestionIndex] = useState(0);
  const [suggestionsActive, setSuggestionsActive] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const navigate = useNavigate();

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();

    setSearchValue(query);
    if (query.length > 1) {
      // TO DO: Add search by composer and title
      const filteredSuggestions = data.filter((suggestion) =>
        suggestion.title?.toLowerCase().includes(query.trim())
      );

      console.log(filteredSuggestions.length);
      setSuggestions(filteredSuggestions);
      setSuggestionsActive(true);
    } else {
      setSuggestionsActive(false);
    }
  };

  const clearSearchInput = () => {
    setSuggestions([]);
    setSearchValue('');
    setSuggestionsActive(false);
  };

  const handleSelectSuggestion = (suggestion) => {
    clearSearchInput();
    navigate(
      `/${convertToPath(suggestion.category)}/${convertToPath(
        suggestion.title
      )}`
    );
  };

  const handleKeyDownSuggestion = (e) => {
    switch (e.keyCode) {
      case 38:
        // ARROW UP
        if (suggestionIndex === 0) return;
        setSuggestionIndex(suggestionIndex - 1);
        break;
      case 40:
        // ARROW DOWN
        if (suggestionIndex - 1 === suggestions.length) return;
        setSuggestionIndex(suggestionIndex + 1);
        break;
      case 13:
        // ENTER
        const selectedSuggestion = suggestions[suggestionIndex];

        clearSearchInput();
        navigate(
          `/${convertToPath(selectedSuggestion.category)}/${convertToPath(
            selectedSuggestion.title
          )}`
        );
        break;
      case 27:
        // ESCAPE
        clearSearchInput();
        break;
      default:
        return null;
    }
  };

  const noSuggestions = suggestions.length === 0;
  const searchInputIsEmpty = searchValue.length === 0;

  return (
    <div className='quick-search'>
      <div className='search-bar'>
        <input
          type='text'
          placeholder='Quick Search'
          value={searchValue}
          onChange={handleSearch}
          onKeyDown={handleKeyDownSuggestion}
        />
        <div className='search-icon'>
          {!suggestionsActive && searchInputIsEmpty ? (
            <svg>
              <use href={`${Icons}#icon-search`} />
            </svg>
          ) : (
            <svg className='icon-close' onClick={clearSearchInput}>
              <use href={`${Icons}#icon-close`} />
            </svg>
          )}
        </div>
      </div>
      {suggestionsActive && (
        <Suggestions
          suggestions={suggestions}
          suggestionIndex={suggestionIndex}
          onSuggestionClick={handleSelectSuggestion}
        />
      )}
      {suggestionsActive && noSuggestions && (
        <span className='no-suggestions'>No results found.</span>
      )}
    </div>
  );
};

export default QuickSearch;
