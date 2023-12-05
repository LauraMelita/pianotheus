import React, { useContext } from 'react';

import TitlesList from './TitlesList';
import ComposersList from './ComposersList';
import Spinner from '../../components/UI/spinner/Spinner';

const Collection = (props) => {
  const { data, isLoading, error } = useContext(props.context);

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
    <main className={`${props.collectionName}`}>
      {renderSpinner()}
      {renderCollection()}
      {renderError()}
    </main>
  );
};

export default Collection;
