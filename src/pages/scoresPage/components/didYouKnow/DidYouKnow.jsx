import React from 'react';

const DidYouKnow = ({ trivia }) => {
  return (
    <div>
      <h3 className='heading heading-lb'>Did You Know</h3>
      <span>{trivia}</span>
    </div>
  );
};

export default DidYouKnow;
