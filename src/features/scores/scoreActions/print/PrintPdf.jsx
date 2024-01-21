import React from 'react';

import { useFolderPath } from '../../../../hooks/useFolderPath';
import { useDownloadFile } from '../../../../services/reactQuery/queries';
import { EXTENSION } from '../../../../utils/constants';

import Tooltip from '../../../../components/UI/tooltip/Tooltip';
import Button from '../../../../components/UI/button/Button';
import Svg from '../../../../components/UI/svg/Svg';

const PrintPdf = ({ title }) => {
  const folderPath = useFolderPath();

  const { data: file, refetch: downloadFile } = useDownloadFile(
    folderPath,
    title,
    EXTENSION.PDF
  );

  return (
    <Tooltip content='Print sheet music'>
      <Button variant='icon'>
        <Svg icon='print' />
      </Button>
    </Tooltip>
  );
};

export default PrintPdf;
