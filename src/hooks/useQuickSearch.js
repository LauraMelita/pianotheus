import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useFetchAllCollections } from './useFetchAllCollections';
import { siteConfig } from '../utils/config';
import { convertToPath } from '../utils/formatting';

export const useQuickSearch = (searchKeys) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const suggestionRef = useRef(null);
  const navigate = useNavigate();
  const { data, isLoading } = useFetchAllCollections(
    siteConfig.firestoreCollections
  );

  const searchInputEmpty = searchInput.length === 0;
  const selectedSuggestion = suggestions[activeSuggestion];
  const noSuggestions = suggestions.length === 0;

  useEffect(() => {
    const activeSuggestion = suggestionRef?.current?.querySelector('.active');

    const timer = setTimeout(() => {
      if (activeSuggestion) {
        activeSuggestion?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'nearest',
        });
      }
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [activeSuggestion, searchInput]);

  const clearSearch = () => {
    setShowDropdown(false);
    setSearchInput('');
    setSuggestions([]);
    setActiveSuggestion(0);
  };

  const handleSearchInputChange = (e) => {
    const searchQuery = e.target.value.toLowerCase();

    setSearchInput(searchQuery);

    if (isLoading) return;

    if (searchQuery.length > 0) {
      const filteredSuggestions = data?.filter(
        (suggestion) =>
          // Data matches 'composer' and 'title' keys
          searchKeys.some((searchKey) =>
            suggestion[searchKey]?.toLowerCase().includes(searchQuery.trim())
          ) ||
          // Data matches a score title
          suggestion.scores.some((score) =>
            score.score?.toLowerCase().includes(searchQuery.trim())
          )
      );

      setSuggestions(filteredSuggestions);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const handleKeyDownActions = (e) => {
    const arrowUp = 38;
    const arrowDown = 40;
    const enter = 13;
    const escape = 27;

    switch (e.keyCode) {
      case arrowUp:
        e.preventDefault();
        if (activeSuggestion === 0) return;
        setActiveSuggestion(activeSuggestion - 1);
        break;
      case arrowDown:
        if (activeSuggestion === suggestions?.length - 1) return;
        setActiveSuggestion(activeSuggestion + 1);
        break;
      case enter:
        if (searchInputEmpty || noSuggestions) return;
        handleSuggestionClick(selectedSuggestion);
        break;
      case escape:
        clearSearch();
        break;
      default:
        return null;
    }
  };

  const handleSuggestionClick = (suggestion) => {
    const { category, title, composer } = suggestion;

    const path = `/${convertToPath(category)}/${convertToPath(
      category === 'classical' ? composer : title
    )}`;

    clearSearch();
    navigate(path);
  };

  const handleSuggestionHover = (index) => setActiveSuggestion(index);

  return {
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
  };
};
