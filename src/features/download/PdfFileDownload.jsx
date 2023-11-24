import React from 'react';

import useFetchFileFromStorage from '../../hooks/useFetchFileFromStorage';

import Icons from '../../assets/icons.svg';

const PdfFileDownload = ({ title }) => {
  const file = useFetchFileFromStorage('.pdf', title);

  if (!file) return;

  const downloadFileAtUrl = async () => {
    const response = await fetch(file);
    const blob = await response.blob();
    const blobURL = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobURL;
    link.setAttribute('download', file.name);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <button className='icon-btn' onClick={downloadFileAtUrl}>
      <svg>
        <use href={`${Icons}#icon-pdf`} />
      </svg>
    </button>
  );
};

export default PdfFileDownload;
