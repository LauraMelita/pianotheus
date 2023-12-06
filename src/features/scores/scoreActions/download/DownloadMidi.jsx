import React from 'react';

import useFetchFileFromStorage from '../../../../hooks/useFetchFileFromStorage';

import Svg from '../../../../components/UI/svg/Svg';

const DownloadMidi = ({ title }) => {
  const file = useFetchFileFromStorage('.mid', title);

  if (!file) return;

  return (
    <a className='icon-btn' href={file.url} download>
      <Svg icon='midi' />
    </a>
  );
};

export default DownloadMidi;
