import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import ComposerInfo from '../components/ComposerInfo.js';
import ComposerWorksList from '../components/ComposerWorksList.js';

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
        <ComposerWorksList data={works} />
        <ComposerInfo name={composerName} image={profilePicture} />
      </div>
      <button onClick={goToPrevPageHandler}>Back To Composers</button>
    </div>
  );
};

export default ComposerPage;
