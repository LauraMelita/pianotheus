import React from 'react';

import useFetchFileFromStorage from '../../hooks/useFetchFileFromStorage';

import Icons from '../../assets/icons/icons.svg';

const MidiFileDownload = ({ title }) => {
  const file = useFetchFileFromStorage('.mid', title);

  if (!file) return;

  return (
    <a href={file.url} download>
      <svg className='download-midi-icon'>
        <use href={`${Icons}#icon-download`} />
      </svg>
    </a>
  );
};

export default MidiFileDownload;
