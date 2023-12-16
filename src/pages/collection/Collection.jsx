import React, { useContext } from 'react';

import { useDocumentTitle } from '@mantine/hooks';

import TitlesList from './TitlesList';
import ComposersList from './ComposersList';
import Spinner from '../../components/UI/spinner/Spinner';

import './Collection.scss';

const Collection = ({ title, type, context }) => {
  const { data, isLoading, error } = useContext(context);
  useDocumentTitle(title);

  const renderSpinner = () => isLoading && <Spinner type='circle' />;

  const renderCollection = () => {
    if (!isLoading && !error)
      return (
        <>
          {type === 'classical' ? (
            <ComposersList data={data} />
          ) : (
            <TitlesList data={data} />
          )}
        </>
      );
  };

  const renderError = () => error && <p>{error}</p>;

  return (
    <main className={`${type}-collection`}>
      {renderSpinner()}
      {renderCollection()}
      {renderError()}
    </main>
  );
};

export default Collection;
