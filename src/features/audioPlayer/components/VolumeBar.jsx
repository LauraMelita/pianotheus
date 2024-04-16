import React from 'react';

import Button from '../../../components/UI/button/Button';
import Svg from '../../../components/UI/svg/Svg';
import Slider from '../../../components/UI/slider/Slider';

const VolumeBar = ({ value, min, max, step, onChange, toggleMute }) => {
  const volumeIcon =
    value === 0
      ? 'volume-mute'
      : value > 0 && value <= 0.5
      ? 'volume-low'
      : 'volume-full';

  return (
    <div className='volume'>
      <Button onClick={toggleMute}>
        <Svg icon={volumeIcon} />
      </Button>

      <Slider
        value={[value]}
        min={min}
        max={max}
        step={step}
        onChange={onChange}
      />
    </div>
  );
};

export default VolumeBar;
