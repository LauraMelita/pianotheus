import React from 'react';

// Note: use useSearchParams for the search bar!
// See https://www.youtube.com/watch?v=7MKEOfSP2s4&t=38s&ab_channel=developedbyed
// Also see: https://www.youtube.com/watch?v=oqJY1L0gnto&ab_channel=Domthedev

const SearchBar = () => {
  return (
    <div className='search-bar'>
      <input type='text' placeholder='Search...' />
    </div>
  );
};

export default SearchBar;
