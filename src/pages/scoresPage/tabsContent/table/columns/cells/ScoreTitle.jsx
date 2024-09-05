import React from 'react';
import classNames from 'classnames';

import { useAudioPlayer } from '../../../../../../hooks/useAudioPlayer';

const ScoreTitle = ({ title, work }) => {
  const { isActiveSongPlaying } = useAudioPlayer();

  const isActive = isActiveSongPlaying(title);

  // prettier-ignore
  const scoreTitleClasses = classNames('score__title', {
    'active': isActive,
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <span className={scoreTitleClasses}>{title}</span>
      {work && <span className='score__album'>{work}</span>}
    </div>
  );
};

export default ScoreTitle;
