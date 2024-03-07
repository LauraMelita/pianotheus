import React from 'react';

import Button from '../../../components/UI/button/Button';
import Svg from '../../../components/UI/svg/Svg';

import { formatTime } from '../../../utils/formatting';

const ProgressBar = ({
  value,
  min,
  max,
  onInput,
  setCurrentTime,
  playbackProgress,
}) => {
  return (
    <div className='progress'>
      <Button
        className='backward__btn'
        onClick={() => setCurrentTime(playbackProgress - 5)}
      >
        <Svg icon='backward-5' />
      </Button>

      <span>{value === 0 ? '0:00' : formatTime(value)}</span>

      <input
        type='range'
        step='any'
        value={value}
        min={min}
        max={max}
        onInput={onInput}
      />

      <span>{max === 0 ? '0:00' : formatTime(max)}</span>

      <Button
        className='forward__btn'
        onClick={() => setCurrentTime(playbackProgress + 5)}
      >
        <Svg icon='forward-5' />
      </Button>
    </div>
  );
};

export default ProgressBar;
