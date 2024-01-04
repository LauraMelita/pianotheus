import React from 'react';

import useFetchFile from '../../../../hooks/useFetchFile';

import Tooltip from '../../../../components/UI/tooltip/Tooltip';
import Svg from '../../../../components/UI/svg/Svg';

const PrintPdf = ({ title }) => {
  const file = useFetchFile('.pdf', title);

  if (!file) return;

  return (
    <Tooltip content='Print sheet music'>
      <button className='icon-btn'>
        <Svg icon='print' />
      </button>
    </Tooltip>
  );
};

export default PrintPdf;
