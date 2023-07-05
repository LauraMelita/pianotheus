import React from 'react';
import useFetchFileFromStorage from '../hooks/useFetchFileFromStorage';

import Icons from './../assets/icons.svg';

const MidiFileDownload = ({ movie, title }) => {
  const file = useFetchFileFromStorage(movie, '.mid', title);

  if (!file) return;

  return (
    <>
      <a href={file.url} download>
        <svg>
          <use href={`${Icons}#download-icon`} />
        </svg>
      </a>
    </>
  );
};

export default MidiFileDownload;
