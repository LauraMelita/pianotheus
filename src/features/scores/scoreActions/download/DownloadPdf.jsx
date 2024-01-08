import React from 'react';

import useFetchFile from '../../../../hooks/useFetchFile';

import Tooltip from '../../../../components/UI/tooltip/Tooltip';
import Button from '../../../../components/UI/button/Button';
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
    <Tooltip content='Download pdf file'>
      <Button variant='icon' onClick={downloadFileAtUrl}>
        <Svg icon='pdf' />
      </Button>
    </Tooltip>
  );
};

export default DownloadPdf;
