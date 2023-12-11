import React from 'react';

import Svg from '../svg/Svg';

import './Quote.scss';

const Quote = ({ text, author, source }) => {
  return (
    <div className='quote'>
      <Svg icon='quote' />
      <div className='quote__container'>
        <div
          className='quote__text'
          dangerouslySetInnerHTML={{ __html: text }}
        />
        <div className='quote__reference'>
          <span className='quote__line'>― </span>
          <span className='quote__author'>{author}</span>
          <br />
          <span className='quote__source'>{source}</span>
        </div>
      </div>
    </div>
  );
};

export default Quote;
