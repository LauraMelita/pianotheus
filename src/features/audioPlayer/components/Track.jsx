import React, { memo } from 'react';

import Badge from '../../../components/UI/badge/Badge';

const Track = memo(({ title, work, artist, cover }) => {
  return (
    <div className='track'>
      <Badge
        image={cover}
        title={artist}
        width={55}
        height={55}
        borderRadius='10%'
      />
      <div className='track__info'>
        {work && <span>{work}</span>}
        <span className='track__title'>{title}</span>
        <span className='track__artist'>{artist}</span>
      </div>
    </div>
  );
});

export default Track;
