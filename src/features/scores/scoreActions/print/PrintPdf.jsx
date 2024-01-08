import React from 'react';

import useFetchFile from '../../../../hooks/useFetchFile';

import Tooltip from '../../../../components/UI/tooltip/Tooltip';
import Button from '../../../../components/UI/button/Button';
import Svg from '../../../../components/UI/svg/Svg';

const PrintPdf = ({ title }) => {
  const file = useFetchFile('.pdf', title);

  if (!file) return;

  return (
    <Tooltip content='Print sheet music'>
      <Button variant='icon'>
        <Svg icon='print' />
      </Button>
    </Tooltip>
  );
};

export default PrintPdf;
