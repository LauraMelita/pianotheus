import React from 'react';

import MidiDownload from './MidiDownload';

const Track = ({ movie, title, difficultyLevel }) => {
  return (
    <div>
      <h3>{title}</h3>
      <h5>Difficulty level: {difficultyLevel}</h5>
      <MidiDownload movie={movie} title={title} />
    </div>
  );
};

export default Track;
