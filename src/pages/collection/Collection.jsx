import React, { useContext } from 'react';

import { useDocumentTitle } from '@mantine/hooks';

import Spinner from '../../components/UI/spinner/Spinner';
import Error from '../../components/error/Error';
import TitlesList from './TitlesList';
import ComposersList from './ComposersList';
import MoveBackButton from '../../components/UI/button/MoveBackButton';

const Collection = ({ title, context, category }) => {
  useDocumentTitle(title);
  const { data, isLoading, error } = useContext(context);

  const renderSpinner = () => {
    if (isLoading) return <Spinner type='circle' />;
  };

  const renderError = () => {
    if (error) return <Error error={error} />;
  };

  return (
    <main className={`${category}-collection`}>
      {renderSpinner()}
      {renderError()}
      {category === 'classical' ? (
        <ComposersList data={data} />
      ) : (
        <TitlesList data={data} />
      )}
      <MoveBackButton />
    </main>
  );
};

export default Collection;
