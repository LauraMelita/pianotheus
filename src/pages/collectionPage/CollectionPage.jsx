import React, { useContext } from 'react';

import { useDocumentTitle } from '@mantine/hooks';
import { CollectionContext } from '../../context/CollectionContext';

import Spinner from '../../components/UI/spinner/Spinner';
import TitlesList from './TitlesList';
import ComposersList from './ComposersList';
import MoveBackButton from '../../components/UI/button/MoveBackButton';

const CollectionPage = ({ title }) => {
  // useDocumentTitle(title);
  const { data, isLoading, collectionName } = useContext(CollectionContext);

  const renderSpinner = () => {
    if (isLoading) return <Spinner type='circle' />;
  };

  return (
    <main className={`${collectionName}-collection`}>
      {renderSpinner()}
      {collectionName === 'classical' ? (
        <ComposersList data={data} />
      ) : (
        <TitlesList data={data} />
      )}
      <MoveBackButton />
    </main>
  );
};

export default CollectionPage;
