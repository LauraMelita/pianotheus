import React, { forwardRef } from 'react';

import './Filter.scss';

const Filter = forwardRef(({ options }, ref) => {
  return (
    <div ref={ref} className='filter'>
      {options.map((option, index) => (
        <div key={index}>
          <div>
            <h3>{option.option}</h3>
            <ul>
              {option.values.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
});

export default Filter;
