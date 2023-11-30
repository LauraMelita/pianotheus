import React from 'react';

import MidiFileDownload from '../features/download/MidiFileDownload';
import PdfFileDownload from '../features/download/PdfFileDownload';

import Icons from '../assets/icons/icons.svg';
import './ScoreActions.scss';

const ScoreActions = ({ movie, title }) => {
  return (
    <div className='score-actions'>
      <div className='download'>
        midi
        <br />
        pdf
      </div>

      <MidiFileDownload movie={movie} title={title} />
      <PdfFileDownload movie={movie} title={title} />
      <svg>
        <use href={`${Icons}#icon-print`} />
      </svg>
      <svg>
        <use href={`${Icons}#icon-pdf`} />
      </svg>
      <span>Download Midi</span>
      <span>Download PDF</span>
      <svg>
        <use href={`${Icons}#icon-share`} />
      </svg>
    </div>
  );
};

export default ScoreActions;
