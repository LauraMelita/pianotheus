import React from 'react';

import { useDownloadFile } from '../../../services/reactQuery/queries';

import Spinner from '../../../components/UI/spinner/Spinner';
import Button from '../../../components/UI/button/Button';
import Svg from '../../../components/UI/svg/Svg';

import { FILE_TYPES } from '../../../utils/constants';
import ScoreStatus from '../../../pages/scoresPage/tabsContent/table/columns/cells/ScoreStatus';

const DownloadButton = ({ score: { status, title, gsFileName }, fileType }) => {
  const fileName = gsFileName ? gsFileName : title;
  const fileExtension = FILE_TYPES[fileType].extension;

  const { isFetching, refetch: downloadFile } = useDownloadFile(
    fileName,
    fileExtension
  );

  const fileIsUpcoming = status[fileType] === 'upcoming';
  const fileIsUnavailable = status[fileType] === 'unavailable';

  return fileIsUpcoming || fileIsUnavailable ? (
    <ScoreStatus
      isUpcoming={fileIsUpcoming}
      isUnavailable={fileIsUnavailable}
    />
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
