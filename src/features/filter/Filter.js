import React from 'react';

const Filter = ({ data, defaultValue, filterBy, ariaLabel, setFilter }) => {
  const filterOptions = [
    ...new Set(data.map((element) => element[filterBy])),
  ].sort();

  return (
    <div className='select'>
      <select
        onChange={(e) => setFilter(e.target.value)}
        className='custom-select'
        aria-label={ariaLabel}
      >
        <option value=''>{defaultValue}</option>
        {filterOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <span className='focus'></span>
    </div>
  );
};

export default Filter;
