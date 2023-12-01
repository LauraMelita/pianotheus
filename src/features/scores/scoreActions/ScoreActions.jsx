import React from 'react';

import DownloadMidi from './download/DownloadMidi';
import DownloadPdf from './download/DownloadPdf';
import PrintPdf from './print/PrintPdf';
import Share from './share/Share';

const ScoreActions = ({ movie, scoreTitle }) => {
  return (
    <div className='score__actions'>
      <DownloadMidi title={scoreTitle} />
      <DownloadPdf title={scoreTitle} />
      <PrintPdf title={scoreTitle} />
      <Share />
    </div>
  );
};

export default ScoreActions;
