import React from 'react';

import { usePlayerContext } from '../../../../../context/PlayerContext';

const ScoreTitle = ({ title, work }) => {
  const { isActiveSongPlaying } = usePlayerContext();

  const isActive = isActiveSongPlaying(title);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <span className={`score__title ${isActive ? 'active' : ''}`}>
        {title}
      </span>
      {work && <span className='score__album'>{work}</span>}
    </div>
  );
};

export default ScoreTitle;
