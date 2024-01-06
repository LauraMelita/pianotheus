import React from 'react';

import { useCollectionContext } from '../../context/CollectionContext';
import { useDocumentTitle } from '@mantine/hooks';

import Spinner from '../../components/UI/spinner/Spinner';
import ErrorPage from '../errorPage/ErrorPage';
import TitlesList from './TitlesList';
import ComposersList from './ComposersList';
import MoveBackButton from '../../components/UI/button/MoveBackButton';

const CollectionPage = () => {
  const { collection, collectionTitle, data, isLoading, isError, error } =
    useCollectionContext();
  useDocumentTitle(collectionTitle);

  if (isLoading) return <Spinner type='circle' />;

  if (isError && error) return <ErrorPage code='500' message={error.message} />;

  return (
    <main className={`${collection}-collection`}>
      {collection && collection === 'classical' ? (
        <ComposersList data={data} />
      ) : (
        <TitlesList data={data} />
      )}
      <MoveBackButton />
    </main>
  );
};

export default CollectionPage;
