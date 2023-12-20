import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { ClassicalContext } from '../context/ClassicalContext';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { convertToPath } from '../utils/formatting';

import Spinner from '../components/UI/spinner/Spinner';
import PageNotFound from './error/PageNotFound';

const Classical = () => {
  const { data, isLoading, error } = useContext(ClassicalContext);
  const { composer } = useParams();

  const composerDetails = data?.find(
    (classicalComposer) =>
      convertToPath(classicalComposer.composer) === composer
  );

  useDocumentTitle(composerDetails, `${composerDetails?.composer}`);

  return (
    <main>
      {isLoading && <Spinner type='circle' />}
      {composerDetails && !isLoading && !error && (
        <h3>{composerDetails.composer}</h3>
      )}
      {!isLoading && !composerDetails && <PageNotFound />}
    </main>
  );
};

export default Classical;
