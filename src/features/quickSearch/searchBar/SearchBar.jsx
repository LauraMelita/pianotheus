import React from 'react';

import { useCreateCSSRootVariable } from '../../../hooks/useCreateCSSRootVariable';

import Svg from '../../../components/UI/svg/Svg';
import SearchBarIcons from './icons/SearchBarIcons';

const SearchBar = ({
  dataIsLoading,
  value,
  onChange,
  onKeyDown,
  clearSearch,
  showDropdown,
  searchInputEmpty,
}) => {
  const elementRef = useCreateCSSRootVariable(
    'searchbar-height',
    'offsetHeight',
    'px'
  );

  return (
    <div className='quick-search__search-bar' ref={elementRef}>
      <Svg icon='search' />
      <input
        type='text'
        placeholder='Quick Search'
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <SearchBarIcons
        dataIsLoading={dataIsLoading}
        clearSearch={clearSearch}
        showDropdown={showDropdown}
        searchInputEmpty={searchInputEmpty}
      />
    </div>
  );
};

export default SearchBar;
