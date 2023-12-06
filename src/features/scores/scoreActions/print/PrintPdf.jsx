import React from 'react';

import useFetchFileFromStorage from '../../../../hooks/useFetchFileFromStorage';

import Svg from '../../../../components/UI/svg/Svg';

const PrintPdf = ({ title }) => {
  const file = useFetchFileFromStorage('.pdf', title);

  if (!file) return;

  return (
    <button className='icon-btn'>
      <Svg icon='print' />
    </button>
  );
};

export default PrintPdf;
