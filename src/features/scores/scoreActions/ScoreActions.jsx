import React from 'react';

import DownloadMidi from './download/DownloadMidi';
import DownloadPdf from './download/DownloadPdf';
import PrintPdf from './print/PrintPdf';

const ScoreActions = ({ scoreTitle }) => {
  return (
    <div className='score__actions'>
      <DownloadMidi title={scoreTitle} />
      <DownloadPdf title={scoreTitle} />
      <PrintPdf title={scoreTitle} />
    </div>
  );
};

export default ScoreActions;
