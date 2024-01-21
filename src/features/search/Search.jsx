import React from 'react';

import { Input } from '../../components/UI/form/Form';

const Search = ({ placeholder, searchQuery, setSearchQuery }) => {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      Search
      <Input
        type='search'
        placeholder={placeholder}
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Search;
