import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useFetchAllCollections } from '../../hooks/useFetchAllCollections';

import Suggestions from './suggestions/Suggestions';
import Svg from '../../components/UI/svg/Svg';

import { siteConfig } from '../../utils/config';
import { convertToPath } from '../../utils/helpers';

import './QuickSearch.scss';

const QuickSearch = ({ searchKeys }) => {
  const data = useFetchAllCollections(siteConfig.firestoreCollections);
  const navigate = useNavigate();

  const [input, setInput] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [active, setActive] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInputChange = (e) => {
    const query = e.target.value.toLowerCase();

    setInput(query);
    if (query.length > 0) {
      const newFilteredSuggestions = data?.filter(
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
          {!showDropdown && searchInputIsEmpty ? (
            <Svg icon='search' />
          ) : (
            <Svg icon='close' onClick={clearSearchInput} />
          )}
        </button>
      </div>

      <div className='dropdown'>
        {showDropdown && (
          <Suggestions
            suggestions={filtered}
            searchQuery={input}
            active={active}
            setActive={setActive}
            onSuggestionClick={handleClickSuggestion}
          />
        )}
        {showDropdown && noSuggestions && <NoSuggestions />}
      </div>
    </div>
  );
};

export default QuickSearch;
