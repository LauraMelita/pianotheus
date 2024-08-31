import React from 'react';

import { useResponsive } from '../../../../hooks/useResponsive';

import Table from '../../../../features/table/Table';
import { HeadPhonesIcon } from './columns/Headers';
import PlayAudioButton from './columns/cells/PlayAudioButton';
import ScoreTitle from './columns/cells/ScoreTitle';
import ScoreLevel from './columns/cells/ScoreLevel';
import ScoreStatus from './columns/cells/ScoreStatus';
import ScoresMenu from './columns/cells/ScoresMenu';
import DownloadButton from '../../../../features/scores/download/DownloadButton';
import ViewPDFButton from '../../../../features/scores/view/ViewPDFButton';
import PlayYoutubeTutorial from '../../../../features/scores/play/PlayYoutubeTutorial';

import './ScoresTable.scss';

const ScoresTable = ({ data }) => {
  const { isMobile, isTablet } = useResponsive();

  const columns = [
    {
      accessorKey: 'play',
      header: () => {
        return <HeadPhonesIcon />;
      },
      cell: ({ row }) => (
        <PlayAudioButton
          score={row.original}
          scoreIndex={+row.id}
          scores={data.scores}
        />
      ),
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
      header: 'Difficulty',
      cell: ({ row: { original: score } }) => (
        <ScoreLevel level={score.difficulty} />
      ),
    },
    // Add columns conditionally based on screen sizes
    ...(isMobile || isTablet
      ? [
          {
            id: 'score-menu',
            cell: ({ row: { original: score } }) => (
              <div className='score__menu'>
                <ScoresMenu score={score} />
              </div>
            ),
          },
        ]
      : [
          {
            header: 'Sheet Music',
            cell: ({ row: { original: score } }) => {
              const sheetMusicStatus = score.status.sheetMusic;

              return (
                <div className='score__actions'>
                  {sheetMusicStatus === 'uploaded' ? (
                    <>
                      <DownloadButton score={score} fileType='sheetMusic' />
                      <ViewPDFButton score={score} />
                    </>
                  ) : (
                    <ScoreStatus status={sheetMusicStatus} />
                  )}
                </div>
              );
            },
          },
          {
            header: 'MIDI',
            cell: ({ row: { original: score } }) => {
              const midiStatus = score.status.midi;

              return midiStatus === 'uploaded' ? (
                <DownloadButton score={score} fileType='midi' />
              ) : (
                <ScoreStatus status={midiStatus} />
              );
            },
          },
          {
            header: 'Youtube Tutorial',
            cell: ({ row: { original: score } }) => (
              <div className='score__actions'>
                <PlayYoutubeTutorial
                  title={score.title}
                  videoKey={score.videoKey}
                />
              </div>
            ),
          },
        ]),
  ];

  return (
    <Table
      className='scores-list'
      data={data.scores}
      columns={columns}
      resultsPerPage={10}
      searchBarPlaceholder='Search Scores'
    ></Table>
  );
};

export default ScoresTable;
