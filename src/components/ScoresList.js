import React from 'react';

import Score from './Score';

import './ScoresList.scss';

const ScoresList = ({ data }) => {
  return (
    <div className='scores-list-container'>
      <h3>Scores</h3>
      <div className='scores-list'>
        {data.scores.map((score, index) => (
          <Score
            key={index}
            movie={data.title}
            title={score.score}
            level={score.level}
          />
        ))}
      </div>
    </div>
  );
};

export default ScoresList;
