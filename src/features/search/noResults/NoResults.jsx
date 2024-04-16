import React from 'react';

import Button from '../../../components/UI/button/Button';

import './NoResults.scss';

const NoResults = ({ searchTerm, hasSearchSuggestions, clearSearch }) => {
  return (
    <div className='no-results'>
      <h4>No results found</h4>
      <span>
        There are no results matching your search: &nbsp;
        <q>
          <strong>{searchTerm}</strong>
        </q>
      </span>
      {hasSearchSuggestions && (
        <ul>
          <span>Suggestions</span>
          <li>Make sure that all words are spelled correctly</li>
          <li>Try different search terms</li>
          <li>Try fewer search terms</li>
        </ul>
      )}
      <Button onClick={clearSearch}>Clear Search</Button>
    </div>
  );
};

export default NoResults;
