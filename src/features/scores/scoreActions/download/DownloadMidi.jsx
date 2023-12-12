import React from 'react';

import useFetchFile from '../../../../hooks/useFetchFile';

import Svg from '../../../../components/UI/svg/Svg';

const DownloadMidi = ({ title }) => {
  const file = useFetchFile('.mid', title);

  if (!file) return;

  return (
    <a className='icon-btn' href={file.url} download>
      <Svg icon='midi' />
    </a>
  );
};

export default DownloadMidi;
