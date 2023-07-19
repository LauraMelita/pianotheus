import React from 'react';

import Score from '../components/Score';

import '../styles/components/ScoresList.scss';

const ScoresList = ({ scores, imdbData }) => {
  return (
    <div className='scores-list-container'>
      <h3>Scores</h3>
      <div className='scores-list'>
        {scores.map((score, index) => (
          <Score
            key={index}
            movie={imdbData.title}
            title={score.title}
            difficultyLevel={score.difficultyLevel}
          />
        ))}
      </div>
    </div>
  );
};

export default ScoresList;
