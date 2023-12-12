import React from 'react';

import useFetchFile from '../../../../hooks/useFetchFile';

import Svg from '../../../../components/UI/svg/Svg';

const PrintPdf = ({ title }) => {
  const file = useFetchFile('.pdf', title);

  if (!file) return;

  return (
    <button className='icon-btn'>
      <Svg icon='print' />
    </button>
  );
};

export default PrintPdf;
