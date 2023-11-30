import React from 'react';

import ScoreActions from './ScoreActions';

import './Score.scss';

const Score = ({ movie, title, level }) => {
  return (
    <div className='score'>
      <div className='container'>
        <span className='score-title'>{title}</span>
        <ScoreActions movie={movie} title={title} />
      </div>
      <div className='score-metadata'>
        <span>Difficulty: {level}</span>
      </div>
    </div>
  );
};

export default Score;
