import React from 'react';

import './Filter.scss';

const Filter = ({
  className,
  data,
  defaultValue,
  filterBy,
  ariaLabel,
  setFilter,
}) => {
  const filterOptions = [
    ...new Set(data?.map((element) => element[filterBy])),
  ].sort();

  return (
    <div className={className}>
      <select
        onChange={(e) => setFilter(e.target.value)}
        className='custom-select'
        aria-label={ariaLabel}
      >
        <option value=''>{defaultValue}</option>
        {filterOptions?.map((option, index) => (
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
