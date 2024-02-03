import React from 'react';

import { useFolderPath } from '../../../../hooks/useFolderPath';
import { useDownloadFile } from '../../../../services/reactQuery/queries';
import { EXTENSION } from '../../../../utils/constants';

import Tooltip from '../../../../components/UI/tooltip/Tooltip';
import Button from '../../../../components/UI/button/Button';
import Svg from '../../../../components/UI/svg/Svg';

const DownloadMidi = ({ title }) => {
  const folderPath = useFolderPath();

  const { data: file, refetch: downloadFile } = useDownloadFile(
    folderPath,
    title,
    EXTENSION.MIDI
  );

  return (
    <Tooltip content='Download midi file'>
      <Button variant='icon' onClick={downloadFile} href={file?.url} download>
        <Svg icon='midi' />
      </Button>
    </Tooltip>
  );
};

export default DownloadMidi;
