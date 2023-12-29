import React from 'react';

import './Tags.scss';

const Tags = ({ className, tags, objectKey }) => {
  return (
    <ul className={`${className} tags`}>
      {tags?.map((tag, index) => (
        <li key={index}>{tag[objectKey]}</li>
      ))}
    </ul>
  );
};

export default Tags;
