import React, { memo } from 'react';

import { useResponsive } from '../../../../hooks/useResponsive';

import Button from '../../../../components/UI/button/Button';
import Svg from '../../../../components/UI/svg/Svg';
import Slider from '../../../../components/UI/slider/Slider';

import './VolumeBar.scss';

const VolumeBar = memo(
  ({ volume, min, max, step, handleVolumeChange, toggleMute }) => {
    const { isMobile } = useResponsive();

    const volumeIcon =
      volume === 0
        ? 'volume-mute'
        : volume > 0 && volume <= 0.5
        ? 'volume-low'
        : 'volume-full';

    if (!isMobile)
      return (
        <div className='volume'>
          <Button onClick={toggleMute}>
            <Svg icon={volumeIcon} />
          </Button>

          <Slider
            value={volume}
            min={min}
            max={max}
            step={step}
            onChange={(e) => handleVolumeChange(e)}
          />
        </div>
      );
  }
);

export default VolumeBar;
