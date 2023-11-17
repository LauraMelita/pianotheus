import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Suggestions from './Suggestions';

import { useComponentVisible } from '../../hooks/useComponentVisible';
import { convertToPath } from '../../utils/helper';

import Icons from '../../assets/icons.svg';
import './QuickSearch.scss';

import { movies } from '../../data/movies';
import { tvShows } from '../../data/tvShows';
import { videoGames } from '../../data/videoGames';
import { classical } from '../../data/classical';

const QuickSearch = ({ searchKeys }) => {
  const data = [...movies, ...tvShows, ...videoGames, ...classical];
  const { ref, isComponentVisible } = useComponentVisible(false);

  const [input, setInput] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [active, setActive] = useState(0);
  const [showDropDown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const query = e.target.value.toLowerCase();

    setInput(query);
    if (query.length > 0) {
      const newFilteredSuggestions = data.filter(
        (suggestion) =>
          // Data matches 'composer' and 'title' keys
          searchKeys.some((searchKey) =>
            suggestion[searchKey]?.toLowerCase().includes(query.trim())
          ) ||
          // Data matches a score title
          suggestion.scores.some((score) =>
            score.score?.toLowerCase().includes(query.trim())
          )
      );

      setFiltered(newFilteredSuggestions);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const clearSearchInput = () => {
    setFiltered([]);
    setInput('');
    setActive(0);
    setShowDropdown(false);
  };

  const handleClickSuggestion = (suggestion) => {
    const { category, title, composer } = suggestion;

    const path = `/${convertToPath(category)}/${convertToPath(
      category === 'classical' ? composer : title
    )}`;

    clearSearchInput();
    navigate(path);
  };

  const handleInputKeyDown = (e) => {
    const selectedSuggestion = filtered[active];
    const arrowUp = 38;
    const arrowDown = 40;
    const enter = 13;
    const escape = 27;

    switch (e.keyCode) {
      case arrowUp:
        // Prevents the cursor for moving in front of the search input
        e.preventDefault();
        if (active === 0) return;
        setActive(active - 1);
        break;
      case arrowDown:
        if (active === filtered?.length - 1) return;
        setActive(active + 1);
        break;
      case enter:
        const { category, title, composer } = selectedSuggestion;

        const path = `/${convertToPath(category)}/${convertToPath(
          category === 'classical' ? composer : title
        )}`;

        clearSearchInput();
        navigate(path);
        break;
      case escape:
        clearSearchInput();
        break;
      default:
        return null;
    }
  };

  const searchInputIsEmpty = input?.length === 0;
  const noSuggestions = filtered.length === 0;

  const NoSuggestions = () => {
    return <span className='no-suggestions'>No results found.</span>;
  };

  return (
    <div className='quick-search'>
      <div className='search-bar'>
        <input
          type='text'
          placeholder='Quick Search'
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
        />
        <button className='search-icon icon-btn'>
          {!showDropDown && searchInputIsEmpty ? (
            <svg>
              <use href={`${Icons}#icon-search`} />
            </svg>
          ) : (
            <svg onClick={clearSearchInput}>
              <use href={`${Icons}#icon-close`} />
            </svg>
          )}
        </button>
      </div>

      <div className='dropdown'>
        {showDropDown && (
          <Suggestions
            suggestions={filtered}
            searchQuery={input}
            active={active}
            setActive={setActive}
            onSuggestionClick={handleClickSuggestion}
          />
        )}
        {showDropDown && noSuggestions && <NoSuggestions />}
      </div>
    </div>
  );
};

export default QuickSearch;
