import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { TVShowsContext } from '../context/TVShowsContext';
import { useUpdateDocumentTitle } from '../hooks/useUpdateDocumentTitle';
import { convertToPath } from '../utils/helpers';

import PageNotFound from './error/PageNotFound';

const TVShow = () => {
  const { data, isLoading, error } = useContext(TVShowsContext);
  const { title } = useParams();

  const tvShowDetails = data?.find(
    (show) => convertToPath(show.title) === title
  );

  useUpdateDocumentTitle(tvShowDetails, `${tvShowDetails?.title}`);

  return (
    <main>
      {isLoading && <h3>Loading...</h3>}
      {tvShowDetails && !isLoading && !error && <h3>{tvShowDetails.title}</h3>}
      {!isLoading && !tvShowDetails && <PageNotFound />}
    </main>
  );
};

export default TVShow;
