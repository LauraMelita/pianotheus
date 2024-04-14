import React from 'react';

import { useCollectionContext } from '../../../context/CollectionContext';

import Table from '../../../features/table/Table';
import { HeadPhonesIcon } from './columns/Headers';
import PlayAudioButton from './columns/cells/PlayAudioButton';
import ScoreTitle from './columns/cells/ScoreTitle';
import ScoreLevel from './columns/cells/ScoreLevel';
import DownloadButton from '../../../features/scores/download/DownloadButton';
import ViewPDFButton from '../../../features/scores/view/ViewPDFButton';
import PlayYoutubeTutorial from '../../../features/scores/play/PlayYoutubeTutorial';

import './ScoresTable.scss';

const ScoresTable = ({ data }) => {
  const { isClassical } = useCollectionContext();

  const columns = [
    {
      accessorKey: 'play',
      header: () => {
        return <HeadPhonesIcon />;
      },
      cell: ({ row: { original: score } }) => <PlayAudioButton score={score} />,
    },
    {
      header: 'Title',
      id: 'title',
      accessorFn: (row) => `${row.title} ${row.work}`,
      cell: ({ row: { original: score } }) => (
        <ScoreTitle title={score.title} work={score.work} />
      ),
    },
    {
      accessorKey: 'difficulty',
      header: 'Level',
      cell: ({ row: { original: score } }) => (
        <ScoreLevel level={score.difficulty} />
      ),
    },
    {
      header: 'Tutorial',
      cell: ({ row: { original: score } }) => (
        <div className='score__actions'>
          <PlayYoutubeTutorial title={score.title} videoKey={score.videoKey} />
        </div>
      ),
    },
    {
      header: 'MIDI',
      cell: ({ row: { original: score } }) => (
        <DownloadButton score={score} fileType='midi' />
      ),
    },
    {
      header: 'Sheet Music',
      cell: ({ row: { original: score } }) => (
        <div className='score__actions'>
          <DownloadButton score={score} fileType='sheetMusic' />
          <ViewPDFButton score={score} />
        </div>
      ),
    },
  ];

  return (
    <Table
      className='scores-list'
      data={data.scores}
      columns={columns}
      resultsPerPage={10}
      searchBarPlaceholder={`Search ${
        isClassical ? data.composer : data.title
      } Scores`}
    />
  );
};

export default ScoresTable;
