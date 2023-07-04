import React from 'react';
import useFetchFile from '../hooks/useFetchFile';

import Icons from './../assets/icons.svg';

const PdfFileDownload = ({ movie, title }) => {
  const file = useFetchFile(movie, '.pdf', title);

  if (!file) return;

  return (
    <>
      <a href={file.url} download target='_blank' rel='noreferrer'>
        <svg>
          <use href={`${Icons}#pdf-icon`} />
        </svg>
      </a>
    </>
  );
};

export default PdfFileDownload;
