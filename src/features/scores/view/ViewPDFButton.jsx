import React from 'react';

import { useOpenFileInNewWindow } from '../../../services/reactQuery/queries';

import Spinner from '../../../components/UI/spinner/Spinner';
import Svg from '../../../components/UI/svg/Svg';
import Button from '../../../components/UI/button/Button';

import { FILE_TYPES } from '../../../utils/constants';
import { getFileName } from '../../../utils/helpers';

const ViewPDFButton = ({ score, isDropdownItem }) => {
  const { isFetching, refetch: openFileInNewWindow } = useOpenFileInNewWindow(
    getFileName(score),
    'pdf'
  );

  return isDropdownItem ? (
    <span onClick={() => openFileInNewWindow()}>
      <Svg icon='pdf' />
      Preview {FILE_TYPES.sheetMusic.label}
    </span>
  ) : (
    <Button
      className='view-pdf__btn'
      variant='primary'
      onClick={() => openFileInNewWindow()}
      disabled={isFetching}
    >
      {isFetching ? <Spinner type='dotted' /> : <Svg icon='pdf' />}
    </Button>
  );
};

export default ViewPDFButton;
