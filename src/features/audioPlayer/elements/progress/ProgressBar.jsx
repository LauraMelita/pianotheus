import React, { memo } from 'react';

import { useResponsive } from '../../../../hooks/useResponsive';

import Button from '../../../../components/UI/button/Button';
import Svg from '../../../../components/UI/svg/Svg';
import Slider from '../../../../components/UI/slider/Slider';

import { formatTime } from '../../../../utils/formatting';

import './ProgressBar.scss';

const ProgressBar = memo(
  ({
    songProgress,
    min,
    max,
    handleProgressBarChange,
    handleBackward,
    handleForward,
  }) => {
    const { isMobile } = useResponsive();

    return (
      <div className='progress'>
        {isMobile ? (
          <Slider
            value={songProgress}
            min={min}
            max={max}
            onChange={(e) => handleProgressBarChange(e)}
          />
        ) : (
          <>
            <Button className='backward__btn' onClick={handleBackward}>
              <Svg icon='backward-15' />
            </Button>
            <span>
              {songProgress === 0 ? '0:00' : formatTime(songProgress)}
            </span>
            <Slider
              value={songProgress}
              min={min}
              max={max}
              onChange={(e) => handleProgressBarChange(e)}
            />
            <span>{max === 0 ? '0:00' : formatTime(max)}</span>
            <Button className='forward__btn' onClick={handleForward}>
              <Svg icon='forward-15' />
            </Button>
          </>
        )}
      </div>
    );
  }
);

export default ProgressBar;
