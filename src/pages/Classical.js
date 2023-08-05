import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { ClassicalContext } from '../context/ClassicalContext';
import { useUpdateDocumentTitle } from '../hooks/useUpdateDocumentTitle';
import { convertToPath, removeAccents } from '../utils/helper';

import PageNotFound from '../pages/PageNotFound';

const Classical = () => {
  const { data, isLoading, error } = useContext(ClassicalContext);
  const { composer } = useParams();

  const composerDetails = data?.find(
    (classicalComposer) =>
      removeAccents(convertToPath(classicalComposer.composer)) === composer
  );

  useUpdateDocumentTitle(composerDetails, `${composerDetails?.composer}`);

  return (
    <>
      {isLoading && <h3>Loading...</h3>}
      {composerDetails && !isLoading && !error && (
        <h3>{composerDetails.composer}</h3>
      )}
      {!isLoading && !composerDetails && <PageNotFound />}
    </>
  );
};

export default Classical;
