import React from 'react';

import { useDownloadFile } from '../../../services/reactQuery/queries';

import Spinner from '../../../components/UI/spinner/Spinner';
import Button from '../../../components/UI/button/Button';
import Svg from '../../../components/UI/svg/Svg';

import { FILE_TYPES } from '../../../utils/constants';

const DownloadButton = ({ score: { status, title, gsFileName }, fileType }) => {
  const fileStatus = status[fileType];
  const fileName = gsFileName ? gsFileName : title;
  const fileExtension = FILE_TYPES[fileType].extension;

  const { isFetching, refetch: downloadFile } = useDownloadFile(
    fileName,
    fileExtension
  );

  if (fileStatus === 'upcoming')
    return <span className='score__status'>Coming Soon</span>;

  if (fileStatus === 'unavailable')
    return <span className='score__status'>Unavailable</span>;

  return (
    <Button
      className='download__btn'
      onClick={() => downloadFile()}
      disabled={isFetching}
    >
      {isFetching ? <Spinner type='dotted' /> : <Svg icon='download' />}
      {/* <span>Download</span> */}
    </Button>
  );
};

export default DownloadButton;
