import React from 'react';

import MidiFileDownload from './MidiFileDownload';
import PdfFileDownload from './PdfFileDownload';

const Track = ({ movie, title, difficultyLevel }) => {
  return (
    <div>
      <h3>{title}</h3>
      <h5>Difficulty level: {difficultyLevel}</h5>
      <MidiFileDownload movie={movie} title={title} />
      <PdfFileDownload movie={movie} title={title} />
    </div>
  );
};

export default Track;
