import React from 'react';
import { useParams } from 'react-router';
import { useDocumentTitle } from '@mantine/hooks';

import { useCollectionContext } from '../../context/CollectionContext';
import { convertToPath } from '../../utils/formatting';

import Spinner from '../../components/UI/spinner/Spinner';
import ErrorPage from '../errorPage/ErrorPage';
import MovieAndTvShow from './movieAndTVShow/MovieAndTvShow';
import VideoGame from './videoGame/VideoGame';
import Classical from './classical/Classical';
import Scores from '../../features/scores/Scores';
import MoveBackButton from '../../components/UI/button/MoveBackButton';

import './DetailsPage.scss';

const DetailsPage = () => {
  const {
    data: collection,
    filterKey,
    isLoading,
    error,
  } = useCollectionContext();
  const params = useParams();

  const filteredItem = collection?.find(
    (item) => convertToPath(item[filterKey]) === params[filterKey]
  );

  useDocumentTitle(`${filteredItem?.[filterKey]}`);

  if (isLoading) return <Spinner type='circle' />;

  if (!filteredItem && !isLoading)
    return <ErrorPage code='500' message={error.message} />;

  const renderDetails = () => {
    switch (filteredItem.category) {
      case 'movies':
      case 'tv shows':
        return <MovieAndTvShow data={filteredItem} />;
      case 'video games':
        return <VideoGame filteredData={filteredItem} />;
      case 'classical':
        return <Classical data={filteredItem} />;
      default:
        return null;
    }
  };

  const DetailsContent = () => {
    if (filteredItem) {
      return (
        <>
          {renderDetails()}
          <Scores data={filteredItem} />
          <MoveBackButton />
        </>
      );
    }
  };

  return (
    <main className='details'>
      <DetailsContent />
    </main>
  );
};

export default DetailsPage;
