import React from 'react';

import { useAudioPlayer } from '../../../../../../hooks/useAudioPlayer';

const ScoreTitle = ({ title, work }) => {
  const { isActiveSongPlaying } = useAudioPlayer();

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
