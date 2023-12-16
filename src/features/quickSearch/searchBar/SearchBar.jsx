import React from 'react';

import Svg from '../../../components/UI/svg/Svg';
import Spinner from '../../../components/UI/spinner/Spinner';

const SearchBar = ({
  dataIsLoading,
  value,
  onChange,
  onKeyDown,
  onCloseBtnClick,
  showDropdown,
  searchInputEmpty,
}) => {
  const renderSpinner = () => {
    if (!searchInputEmpty && dataIsLoading) return <Spinner type='dotted' />;
  };

  const renderCloseBtn = () => {
    if (!searchInputEmpty && showDropdown)
      return <Svg icon='close' onClick={onCloseBtnClick} />;
  };

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
        {renderSpinner()}
        {renderCloseBtn()}
      </button>
    </div>
  );
};

export default SearchBar;
