import React from 'react';

import Separator from '../../components/UI/separator/Separator';
import ScoreFeatures from '../scores/features/ScoreFeatures';

import './Scores.scss';

const Scores = ({ data }) => {
  const { movie, scores } = data;

  const ScoresList = () => {
    return (
      <ul className='scores__list'>
        {scores.map(({ score, level }, index) => (
          <li className='score' key={index}>
            <span className='score__title'>{score}</span>
            <Separator type='border' orientation='vertical' />
            <ScoreFeatures movie={movie} scoreTitle={score} />
            <Separator type='border' orientation='vertical' />
            <div className='score__metadata'>
              <span>difficulty: </span>
              <span>{level}</span>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className='scores'>
      <ScoresList />
    </div>
  );
};

export default Scores;
