import React from 'react';

import { Select, Option } from '../../components/UI/select/Select';

const Filters = ({ filterOptions, selectedOptions, handleSelectOption }) => {
  return (
    <div className='filters'>
      {filterOptions?.map(({ filterName, filterKey, options }) => {
        const hasSelectedFilter = selectedOptions[filterKey];

        return (
          <Select
            key={filterKey}
            label={filterName}
            value={selectedOptions[filterKey] || ''}
            onChange={(e) => handleSelectOption(e, filterKey)}
          >
            {/* If a filter was selected, display 'All' to allow clearing that filter */}
            {hasSelectedFilter && <Option label='All' value='all' />}
            {options.map((option) => (
              <Option
                key={option.value}
                label={option.label}
                value={option.value}
              />
            ))}
            <Option />
          </Select>
        );
      })}
    </div>
  );
};

export default Filters;
