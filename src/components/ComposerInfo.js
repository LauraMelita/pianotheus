import React from 'react';

import './../styles/components/ComposerInfo.scss';

const ComposerInfo = ({ name, image }) => {
  return (
    <div className='composer-info'>
      <h3>{name}</h3>
      <img src={image} alt={name} width='150' height='150' />
    </div>
  );
};

export default ComposerInfo;
