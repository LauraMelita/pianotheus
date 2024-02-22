import React, { forwardRef } from 'react';

import Svg from '../../components/UI/svg/Svg';
import { Input } from '../../components/UI/form/Form';
import Button from '../../components/UI/button/Button';

import { KEY_CODES } from '../../utils/constants';

import './Search.scss';

const Search = forwardRef(
  ({ placeholder, value, onChange, searchInputEmpty, clearSearch }, ref) => {
    const handleEscape = (e) => {
      if (e.keyCode === KEY_CODES.ESCAPE) clearSearch();
    };

    return (
      <div ref={ref} className='search'>
        <Svg icon='search' />
        <Input
          type='text'
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyDown={handleEscape}
        />
        <Button variant='icon'>
          {!searchInputEmpty && <Svg icon='close' onClick={clearSearch} />}
        </Button>
      </div>
    );
  }
);

export default Search;
