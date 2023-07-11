import React from 'react';

import './../styles/components/SearchBar.scss';

// Note: use useSearchParams for the search bar!
// See https://www.youtube.com/watch?v=7MKEOfSP2s4&t=38s&ab_channel=developedbyed

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
