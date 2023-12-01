import React from 'react';

import Separator from '../../components/UI/separator/Separator';
import ScoreActions from './scoreActions/ScoreActions';

import './Scores.scss';

const Scores = ({ data }) => {
  const { movie, scores } = data;

  const ScoresList = () => {
    return (
      <ul className='scores__list'>
        {scores.map(({ score, level }, index) => (
          <li className='score' key={index}>
            <span className='score__title'>{score}</span>
            <Separator orientation='vertical' />
            <ScoreActions movie={movie} scoreTitle={score} />
            <Separator orientation='vertical' />
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
