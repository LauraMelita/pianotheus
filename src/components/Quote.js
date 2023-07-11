import React from 'react';

import Icons from './../assets/icons.svg';
import './../styles/components/Quote.scss';

const Quote = () => {
  return (
    <div className='quote-container'>
      <div className='quote-icon-container'>
        <svg>
          <use href={`${Icons}#icon-quote`} />
        </svg>
      </div>
      <div className='quote-text-container'>
        <p className='quote-text'>
          Prometheus stole fire from the gods. We are each the heirs of that
          divine spark.
          <br />
          Used wisely, the spark fuels one's journey and lights the way.
          <br />
          Treated carelessly, the spark consumes its owner and everything in its
          path.
        </p>
        <div className='quote-author-section'>
          <span className='quote-line'>― </span>
          <span className='quote-author'>Thomas Lloyd Qualls</span>
          <br />
          <span className='quote-source'>Painted Oxen</span>
        </div>
      </div>
    </div>
  );
};

export default Quote;
