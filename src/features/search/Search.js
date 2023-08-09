import React from 'react';

const Search = ({ placeholder, searchQuery, setSearchQuery }) => {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      Search
      <input
        type='search'
        placeholder={placeholder}
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Search;
