import React from 'react';

import './Title.scss';

//prettier-ignore
const Metadata = ({ content }) => content ? <> &nbsp;<span>{`(${content})`}</span></> : null;

const Title = ({ title, year, originalTitle, children }) => {
  return (
    <div className='title'>
      <h4>
        {title}
        <Metadata content={year} />
        <Metadata content={originalTitle} />
      </h4>
      {children}
    </div>
  );
};

export default Title;
