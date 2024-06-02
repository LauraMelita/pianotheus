import React from 'react';

import ReadMore from '../../../../features/readMore/ReadMore';

const Description = ({ text, maxWords, header }) => {
  return header ? (
    <div>
      <h4>{header}</h4>
      <ReadMore text={text} maxWords={maxWords} />
    </div>
  ) : (
    <ReadMore text={text} maxWords={maxWords} />
  );
};

export default Description;