import React from 'react';

import Button from '../../../components/UI/button/Button';
import Svg from '../../../components/UI/svg/Svg';
import Slider from '../../../components/UI/slider/Slider';

import { formatTime } from '../../../utils/formatting';

const ProgressBar = ({
  value,
  min,
  max,
  onChange,
  handleBackward,
  handleForward,
}) => {
  return (
    <div className='progress'>
      <Button className='backward__btn' onClick={handleBackward}>
        <Svg icon='backward-15' />
      </Button>

      <span>{value === 0 ? '0:00' : formatTime(value)}</span>

      <Slider value={value} min={min} max={max} onChange={onChange} />

      <span>{max === 0 ? '0:00' : formatTime(max)}</span>

      <Button className='forward__btn' onClick={handleForward}>
        <Svg icon='forward-15' />
      </Button>
    </div>
  );
};

export default ProgressBar;
