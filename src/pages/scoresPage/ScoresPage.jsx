import React from 'react';
import { useParams } from 'react-router';
import { useDocumentTitle } from '@mantine/hooks';

import { useCollectionContext } from '../../context/CollectionContext';
import { useGetDetails } from '../../services/reactQuery/queries';

import Spinner from '../../components/UI/spinner/Spinner';
import ErrorPage from '../errorPage/ErrorPage';
import Backdrop from '../../components/UI/image/Backdrop';
import Breadcrumbs from '../../features/breadcrumbs/Breadcrumbs';
import CategoryDetails from './details/CategoryDetails';
import ScoresTable from './table/ScoresTable';
import Playbar from './playbar/Playbar';

import './ScoresPage.scss';

const ScoresPage = () => {
  const params = useParams();
  const { collection, routeParam, isClassical } = useCollectionContext();
  const collectionParam = params[routeParam];

  const { data, isLoading, isError, error } = useGetDetails(
    collection,
    collectionParam
  );

  useDocumentTitle(data?.[routeParam]);

  if (isLoading) return <Spinner type='circle' />;

  if (isError) {
    return error.message.includes('not-found') ? (
      <ErrorPage code='404' />
    ) : (
      <ErrorPage code='500' message={error.message} />
    );
  }

  return (
    <main className='scores'>
      <Backdrop image={data.backdrop} height='50%' />
      <Breadcrumbs currentPage={isClassical ? data.composer : data.title} />
      <CategoryDetails collection={collection} data={data} />
      <ScoresTable data={data} />
      <Playbar data={data} />
    </main>
  );
};

export default ScoresPage;
