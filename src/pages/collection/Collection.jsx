import React, { useContext } from 'react';

import { useDocumentTitle } from '@mantine/hooks';

import TitlesList from './TitlesList';
import ComposersList from './ComposersList';
import Spinner from '../../components/UI/spinner/Spinner';

import './Collection.scss';

const Collection = (props) => {
  const { data, isLoading, error } = useContext(props.context);
  useDocumentTitle(props.documentTitle);

  const renderSpinner = () => isLoading && <Spinner />;

  const renderCollection = () => {
    if (!isLoading && !error)
      return (
        <>
          {props.collectionName === 'classical' ? (
            <ComposersList data={data} />
          ) : (
            <TitlesList data={data} />
          )}
        </>
      );
  };

  const renderError = () => error && <p>{error}</p>;

  return (
    <main className={`${props.collectionName}-collection`}>
      {renderSpinner()}
      {renderCollection()}
      {renderError()}
    </main>
  );
};

export default Collection;
