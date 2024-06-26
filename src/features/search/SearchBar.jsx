import React, { forwardRef } from 'react';

import Svg from '../../components/UI/svg/Svg';
import { Input } from '../../components/UI/form/Form';
import Button from '../../components/UI/button/Button';

import './SearchBar.scss';

const SearchBar = forwardRef(
  ({ placeholder, value, onChange, clearSearch, ...props }, ref) => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') clearSearch();
    };

    return (
      <div ref={ref} className='search-bar'>
        <div className='search-icon__container'>
          <Svg icon='search' />
        </div>
        <Input
          type='text'
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyDown={handleEscape}
          {...props}
        />
        <Button variant='icon'>
          {value && <Svg icon='close' onClick={clearSearch} />}
        </Button>
      </div>
    );
  }
);

export default SearchBar;
