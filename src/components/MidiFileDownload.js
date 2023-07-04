import React from 'react';
import useFetchFile from '../hooks/useFetchFile';

import Icons from './../assets/icons.svg';

const MidiFileDownload = ({ movie, title }) => {
  const file = useFetchFile(movie, '.mid', title);

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
