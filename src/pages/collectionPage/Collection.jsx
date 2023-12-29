import React, { useContext } from 'react';

import { useDocumentTitle } from '@mantine/hooks';

import Spinner from '../../components/UI/spinner/Spinner';
import TitlesList from './TitlesList';
import ComposersList from './ComposersList';
import MoveBackButton from '../../components/UI/button/MoveBackButton';

const Collection = ({ title, context, category }) => {
  useDocumentTitle(title);
  const { data, isLoading, isError, isSuccess } = useContext(context);

  const renderSpinner = () => {
    if (isLoading) return <Spinner type='circle' />;
  };

  return (
    <main className={`${category}-collection`}>
      {renderSpinner()}
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
