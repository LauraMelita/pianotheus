import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useLocation } from 'react-router-dom';
import { useDocumentTitle } from '@mantine/hooks';

import { useCollectionContext } from '../../context/CollectionContext';
import { useGetDetails } from '../../services/reactQuery/queries';
import { useAudioPlayer } from '../../hooks/useAudioPlayer';

import Spinner from '../../components/UI/spinner/Spinner';
import ErrorPage from '../errorPage/ErrorPage';
import Hero from './hero/Hero';
import Breadcrumbs from '../../features/breadcrumbs/Breadcrumbs';
import Details from './hero/details/Details';
import Tabs from '../../features/tabs/Tabs';
import ScoresTable from './tabsContent/table/ScoresTable';
import Overview from './tabsContent/overview/Overview';
import StickyPlaybar from './stickyPlaybar/StickyPlaybar';
import AudioPlayer from '../../features/audioPlayer/AudioPlayer';

import './ScoresPage.scss';

const ScoresPage = () => {
  const params = useParams();
  const { pathname } = useLocation();
  const { collection, routeParam, isClassical } = useCollectionContext();
  const collectionParam = params[routeParam];
  const { closePlaybar } = useAudioPlayer();

  const { data, isLoading, isError, error } = useGetDetails(
    collection,
    collectionParam
  );

  useEffect(() => {
    closePlaybar();
  }, [pathname, closePlaybar]);

  useDocumentTitle(data?.[routeParam]);

  if (isError) {
    return error.message.includes('not-found') ? (
      <ErrorPage code='404' />
    ) : (
      <ErrorPage code='500' message={error.message} />
    );
  }

  const tabs = [
    {
      name: 'scores',
      label: 'Scores',
      content: <ScoresTable data={data} />,
    },
    {
      name: 'overview',
      label: 'Overview',
      content: <Overview data={data} />,
    },
  ];

  return (
    <main className='scores'>
      {isLoading ? (
        <Spinner type='circle' />
      ) : (
        <>
          <Hero image={data.backdrop}>
            <Breadcrumbs
              currentPage={isClassical ? data.composer : data.title}
            />
            <Details data={data} />
          </Hero>
          <Tabs className='full-width' tabs={tabs} />
          <StickyPlaybar>
            <AudioPlayer data={data} />
          </StickyPlaybar>
        </>
      )}
    </main>
  );
};

export default ScoresPage;
