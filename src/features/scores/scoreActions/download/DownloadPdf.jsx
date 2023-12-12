import React from 'react';

import useFetchFile from '../../../../hooks/useFetchFile';

import Svg from '../../../../components/UI/svg/Svg';

const DownloadPdf = ({ title }) => {
  const file = useFetchFile('.pdf', title);

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
      <Svg icon='pdf' />
    </button>
  );
};

export default DownloadPdf;
