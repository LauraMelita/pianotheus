import React from 'react';

import Badge from '../../../../components/UI/badge/Badge';

const Composer = ({ composer, composerImg }) => {
  return (
    <Badge
      className='composer'
      title={composer}
      image={composerImg}
      width={35}
      height={35}
      borderRadius='50%'
    >
      <span>{composer}</span>
    </Badge>
  );
};

export default Composer;
