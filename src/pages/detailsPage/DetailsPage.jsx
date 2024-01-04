import React from 'react';

import { useFilterItem } from '../../hooks/useFilterItem';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

import Spinner from '../../components/UI/spinner/Spinner';
import NotFoundPage from '../errorPage/NotFoundPage';

import MovieAndTvShow from './movieAndTVShow/MovieAndTvShow';
import VideoGame from './videoGame/VideoGame';
import Classical from './classical/Classical';
import Scores from '../../features/scores/Scores';
import MoveBackButton from '../../components/UI/button/MoveBackButton';

import './DetailsPage.scss';

const DetailsPage = ({ filterKey }) => {
  const { filteredItem, isLoading } = useFilterItem(filterKey);
  useDocumentTitle(filteredItem, `${filteredItem?.[filterKey]}`);

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

  const renderSpinner = () => {
    if (isLoading) return <Spinner type='circle' />;
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

  if (!filteredItem && !isLoading) {
    return <NotFoundPage />;
  }

  return (
    <main className='details'>
      {renderSpinner()}
      <DetailsContent />
    </main>
  );
};

export default DetailsPage;
