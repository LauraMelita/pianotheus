import React, { useState, useEffect } from 'react';

import { Select, Option } from '../../components/UI/select/Select';

const Filters = ({ filterOptions, searchParams, setSearchParams }) => {
  const [currentOption, setCurrentOption] = useState({
    value: '',
    filterKey: '',
  });

  const selectedOption = (filterKey) => searchParams.get(filterKey) || '';

  const handleSelectOption = (e, filterKey) => {
    setCurrentOption({ value: e, filterKey });

    setSearchParams(
      (prev) => {
        prev.set(filterKey, e);
        return prev;
      },
      { replace: true }
    );
  };

  const clearSearchParam = (filterKey) => {
    setSearchParams((prev) => {
      prev.delete(filterKey);
      return prev;
    });
  };

  useEffect(() => {
    if (currentOption.value === 'all')
      clearSearchParam(currentOption.filterKey);
  }, [currentOption]);

  return (
    <div className='filters'>
      {filterOptions.map(({ filterName, filterKey, options }) => (
        <Select
          key={filterKey}
          label={filterName}
          value={selectedOption(filterKey)}
          onChange={(e) => handleSelectOption(e, filterKey)}
        >
          {/* If a filter was selected, display 'All' to allow clearing that filter */}
          {selectedOption(filterKey) && <Option label='All' value='all' />}
          {options.map((option) => (
            <Option
              key={option.value}
              label={option.label}
              value={option.value}
            />
          ))}
          <Option />
        </Select>
      ))}
    </div>
  );
};

export default Filters;
