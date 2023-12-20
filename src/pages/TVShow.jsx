import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { TVShowsContext } from '../context/TVShowsContext';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { convertToPath } from '../utils/formatting';

import Spinner from '../components/UI/spinner/Spinner';
import PageNotFound from './error/PageNotFound';

const TVShow = () => {
  const { data, isLoading, error } = useContext(TVShowsContext);
  const { title } = useParams();

  const tvShowDetails = data?.find(
    (show) => convertToPath(show.title) === title
  );

  useDocumentTitle(tvShowDetails, `${tvShowDetails?.title}`);

  return (
    <main>
      {isLoading && <Spinner type='circle' />}
      {tvShowDetails && !isLoading && !error && <h3>{tvShowDetails.title}</h3>}
      {!isLoading && !tvShowDetails && <PageNotFound />}
    </main>
  );
};

export default TVShow;
