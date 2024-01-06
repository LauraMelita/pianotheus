import React from 'react';

import useFetchFile from '../../../../hooks/useFetchFile';

import Tooltip from '../../../../components/UI/tooltip/Tooltip';
import Svg from '../../../../components/UI/svg/Svg';

const DownloadMidi = ({ title }) => {
  const file = useFetchFile('.mid', title);

  if (!file) return;

  return (
    <Tooltip content='Download midi file'>
      <a className='icon-btn' href={file.url} download>
        <Svg icon='midi' />
      </a>
    </Tooltip>
  );
};

export default DownloadMidi;
