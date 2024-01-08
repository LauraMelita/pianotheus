import React from 'react';

import useFetchFile from '../../../../hooks/useFetchFile';

import Tooltip from '../../../../components/UI/tooltip/Tooltip';
import Button from '../../../../components/UI/button/Button';
import Svg from '../../../../components/UI/svg/Svg';

const DownloadMidi = ({ title }) => {
  const file = useFetchFile('.mid', title);

  if (!file) return;

  return (
    <Tooltip content='Download midi file'>
      <Button variant='icon' href={file.url} download>
        <Svg icon='midi' />
      </Button>
    </Tooltip>
  );
};

export default DownloadMidi;
