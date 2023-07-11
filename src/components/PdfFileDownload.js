import React from 'react';
import useFetchFileFromStorage from '../hooks/useFetchFileFromStorage';

import Icons from './../assets/icons.svg';

const PdfFileDownload = ({ movie, title }) => {
  const file = useFetchFileFromStorage(movie, '.pdf', title);

  if (!file) return;

  return (
    <>
      <a href={file.url} download target='_blank' rel='noreferrer'>
        <svg>
          <use href={`${Icons}#icon-file`} />
        </svg>
      </a>
    </>
  );
};

export default PdfFileDownload;
