import React from 'react';
import { useParams } from 'react-router-dom';

import MoviesList from './MoviesList';
import NotFoundPage from '../pages/NotFoundPage';
import GoToPrevPageButton from './GoToPrevPageButton';
import { convertToPath } from '../utils/helper';

import '../styles/components/Composer.scss';

const Composer = ({ data }) => {
  const { composer } = useParams();

  const composerData = data.find(({ composerName }) => {
    return convertToPath(composerName) === composer;
  });

  return (
    <>
      {composerData ? (
        <div className='composer-page-wrapper'>
          <div className='composer-badge-container'>
            <div className='composer-badge'>
              <div className='composer-image'>
                <img
                  src={composerData.profilePicture}
                  alt={composerData.composerName}
                />
              </div>
              <h3 className='composer-name'>{composerData.composerName}</h3>
            </div>
          </div>

          <div className='composer-works'>
            {composerData.works.map(({ movie, year, scores }, index) => (
              <MoviesList
                key={index}
                composerName={composerData.composerName}
                movie={movie}
                year={year}
                scores={scores}
              />
            ))}
          </div>
          <GoToPrevPageButton btnText='Back to Composers' />
        </div>
      ) : (
        <NotFoundPage />
      )}
    </>
  );
};

export default Composer;
