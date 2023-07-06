import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { v4 as createId } from 'uuid';

import Movie from '../components/Movie';

import './../styles/pages/ComposerPage.scss';

import { movies } from '../data/movies.js'; // To remove

const ComposerPage = () => {
  const { composerPath } = useParams();
  const navigate = useNavigate();

  // BUG WITH PATH HERE - TO FIX
  const { composerName, profilePicture, works } = movies.find((composer) => {
    return composer.path === composerPath;
  });

  const goToPrevPageHandler = () => {
    navigate(-1);
  };

  return (
    <div className='composer-page-wrapper'>
      <div className='composer-container'>
        <div className='composer-info'>
          <h3>{composerName}</h3>
          <img
            src={profilePicture}
            alt={composerName}
            width='150'
            height='150'
          />
        </div>

        <div className='composer-works'>
          {works.map(({ movie, year, tracks }) => (
            <Movie key={createId()} movie={movie} year={year} tracks={tracks} />
          ))}
        </div>
      </div>
      <button onClick={goToPrevPageHandler}>Back To Composers</button>
    </div>
  );
};

export default ComposerPage;
