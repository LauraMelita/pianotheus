import React from 'react';

import { useCreateCSSRootVariable } from '../../../hooks/useCreateCSSRootVariable';

import Button from '../../../components/UI/button/Button';
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
  const elementRef = useCreateCSSRootVariable(
    'searchbar-height',
    'offsetHeight',
    'px'
  );

  const renderSpinner = () => {
    if (!searchInputEmpty && dataIsLoading) return <Spinner type='dotted' />;
  };

  const renderCloseBtn = () => {
    if (!searchInputEmpty && showDropdown)
      return <Svg icon='close' onClick={onCloseBtnClick} />;
  };

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

      <Button variant='icon'>
        {renderSpinner()}
        {renderCloseBtn()}
      </Button>
    </div>
  );
};

export default SearchBar;
