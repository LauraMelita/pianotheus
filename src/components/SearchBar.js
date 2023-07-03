import React from 'react';

import './../styles/components/SearchBar.scss';

const SearchBar = () => {
  return (
    <div className='search-container'>
      <div className='search-bar'>
        <input type='text' placeholder='Search...' />
      </div>
    </div>
  );
};

export default SearchBar;
