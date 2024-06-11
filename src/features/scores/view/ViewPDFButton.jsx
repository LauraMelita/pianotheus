import React from 'react';

import { useOpenFileInNewWindow } from '../../../services/reactQuery/queries';

import Spinner from '../../../components/UI/spinner/Spinner';
import Svg from '../../../components/UI/svg/Svg';
import Button from '../../../components/UI/button/Button';

const ViewPDFButton = ({ score }) => {
  const fileName = score.gsFileName ? score.gsFileName : score.title;

  const { isFetching, refetch: openFileInNewWindow } = useOpenFileInNewWindow(
    fileName,
    'pdf'
  );

  return score.status.sheetMusic === 'uploaded' ? (
    <Button
      className='view-pdf__btn'
      variant='primary'
      onClick={() => openFileInNewWindow()}
      disabled={isFetching}
    >
      {isFetching ? <Spinner type='dotted' /> : <Svg icon='pdf' />}
    </Button>
  ) : null;
};

export default ViewPDFButton;
