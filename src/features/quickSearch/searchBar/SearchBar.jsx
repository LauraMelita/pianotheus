import React from 'react';

import Svg from '../../../components/UI/svg/Svg';

const SearchBar = ({
  value,
  onChange,
  onKeyDown,
  onCloseBtnClick,
  showDropdown,
  searchInputEmpty,
}) => {
  return (
    <div className='quick-search__search-bar'>
      <Svg icon='search' className='icon-search' />
      <input
        type='text'
        placeholder='Quick Search'
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <button className='icon-btn'>
        {showDropdown && !searchInputEmpty && (
          <Svg icon='close' onClick={onCloseBtnClick} />
        )}
      </button>
    </div>
  );
};

export default SearchBar;
