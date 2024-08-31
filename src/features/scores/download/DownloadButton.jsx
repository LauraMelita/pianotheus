import React from 'react';

import { useDownloadFile } from '../../../services/reactQuery/queries';

import Spinner from '../../../components/UI/spinner/Spinner';
import Button from '../../../components/UI/button/Button';
import Svg from '../../../components/UI/svg/Svg';

import { FILE_TYPES } from '../../../utils/constants';
import { getFileName } from '../../../utils/helpers';

const DownloadButton = ({ score, fileType, isDropdownItem }) => {
  const fileName = getFileName(score);
  const fileExtension = FILE_TYPES[fileType].extension;
  const fileLabel = FILE_TYPES[fileType].label;

  const { isFetching, refetch: downloadFile } = useDownloadFile(
    fileName,
    fileExtension
  );

  return isDropdownItem ? (
    <span onClick={() => downloadFile()}>
      <Svg icon='download' />
      Download {fileLabel}
    </span>
  ) : (
    <Button
      className='download__btn'
      variant='primary'
      onClick={() => downloadFile()}
      disabled={isFetching}
    >
      {isFetching ? <Spinner type='dotted' /> : <Svg icon='download' />}
    </Button>
  );
};

export default DownloadButton;
