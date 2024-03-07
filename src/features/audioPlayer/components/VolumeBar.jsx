import React from 'react';

import Button from '../../../components/UI/button/Button';
import Svg from '../../../components/UI/svg/Svg';

const VolumeBar = ({ value, min, max, onChange, toggleMute }) => {
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

      <input
        type='range'
        step='any'
        value={value}
        min={min}
        max={max}
        onChange={onChange}
      />
    </div>
  );
};

export default VolumeBar;
