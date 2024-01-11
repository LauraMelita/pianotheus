import React from 'react';

import { useFolderPath } from '../../../../hooks/useFolderPath';
import { useDownloadFile } from '../../../../services/reactQuery/queries';
import { EXTENSION } from '../../../../utils/constants';

import Tooltip from '../../../../components/UI/tooltip/Tooltip';
import Button from '../../../../components/UI/button/Button';
import Svg from '../../../../components/UI/svg/Svg';

const DownloadPdf = ({ title }) => {
  const folderPath = useFolderPath();

  const { data: file, refetch: downloadFile } = useDownloadFile(
    folderPath,
    title,
    EXTENSION.PDF
  );

  return (
    <Tooltip content='Download pdf file'>
      <Button onClick={downloadFile} variant='icon' href={file?.url} download>
        <Svg icon='pdf' />
      </Button>
    </Tooltip>
  );
};

export default DownloadPdf;
