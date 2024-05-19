import React from 'react';

import Svg from '../../../../../../components/UI/svg/Svg';

const ScoreLevel = ({ level }) => {
  const levelMap = {
    easy: 1,
    medium: 2,
    hard: 3,
    'very hard': 4,
  };

  const skulls = Array.from({ length: levelMap[level] });

  return (
    <div className='score__level'>
      {skulls.map((_, index) => (
        <Svg key={index} icon='skull' />
      ))}
    </div>
  );
};

export default ScoreLevel;
