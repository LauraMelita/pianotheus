import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import MoviesList from './MoviesList';
import NotFoundPage from '../pages/NotFoundPage';
import { convertToPath } from '../utils/helper';

import './../styles/components/Composer.scss';

const Composer = ({ data }) => {
  const { composer } = useParams();
  const navigate = useNavigate();

  const composerData = data.find(({ composerName }) => {
    return convertToPath(composerName) === composer;
  });

  const goToPrevPageHandler = () => {
    navigate(-1);
  };

  return (
    <>
      {composerData ? (
        <div className='composer-page-wrapper'>
          <div className='composer-container'>
            <div className='composer-info'>
              <h3>{composerData.composerName}</h3>
              <img
                src={composerData.profilePicture}
                alt={composerData.composerName}
                width='150'
                height='150'
              />
            </div>
            <div className='composer-works'>
              {composerData.works.map(({ movie, year, tracks }, index) => (
                <MoviesList
                  key={index}
                  composerName={composerData.composerName}
                  movie={movie}
                  year={year}
                  tracks={tracks}
                />
              ))}
            </div>
          </div>
          <button onClick={goToPrevPageHandler}>Back To Composers</button>
        </div>
      ) : (
        <NotFoundPage />
      )}
    </>
  );
};

export default Composer;
