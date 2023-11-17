import React from 'react';

import Icons from '../../assets/icons.svg';
import './Quote.scss';

const Quote = ({ quoteText, author, source }) => {
  return (
    <div className='quote'>
      <div className='icon'>
        <svg>
          <use href={`${Icons}#icon-quote`} />
        </svg>
      </div>
      <div className='text'>
        <p dangerouslySetInnerHTML={{ __html: quoteText }} />
        <div className='reference'>
          <span className='line'>― </span>
          <span className='author'>{author}</span>
          <br />
          <span className='source'>{source}</span>
        </div>
      </div>
    </div>
  );
};

export default Quote;
