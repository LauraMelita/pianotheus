import React from 'react';

import ScoreActions from './ScoreActions';

import '../styles/components/Score.scss';

const Score = ({ movie, title, difficultyLevel }) => {
  return (
    <div className='score'>
      <div className='container'>
        <h3 className='score-title'>{title}</h3>
        <ScoreActions movie={movie} title={title} />
      </div>
      <div className='score-metadata'>
        <span>Difficulty: {difficultyLevel}</span>
      </div>
    </div>
  );
};

export default Score;
