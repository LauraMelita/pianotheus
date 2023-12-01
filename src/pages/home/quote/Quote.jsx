import React from 'react';

import Svg from '../../../components/UI/svg/Svg';

import './Quote.scss';

const Quote = () => {
  return (
    <div className='quote'>
      <div className='icon'>
        <Svg icon='quote' />
      </div>
      <div className='text'>
        <p>
          Prometheus stole fire from the gods. We are each the heirs of that
          divine spark.
          <br />
          Used wisely, the spark fuels one's journey and lights the way.
          <br />
          Treated carelessly, the spark consumes its owner and everything in its
          path.
        </p>
        <div className='reference'>
          <span className='line'>― </span>
          <span className='author'>Thomas Lloyd Qualls</span>
          <br />
          <span className='source'>Painted Oxen</span>
        </div>
      </div>
    </div>
  );
};

export default Quote;
