import React, { memo } from 'react';

import { useResponsive } from '../../../../hooks/useResponsive';

import Button from '../../../../components/UI/button/Button';
import Svg from '../../../../components/UI/svg/Svg';

import './Controls.scss';

const Controls = memo(
  ({
    repeat,
    toggleRepeat,
    handlePreviousTrack,
    isPlaying,
    togglePlayPause,
    handleNextTrack,
    disablePrevNextButtons,
  }) => {
    const { isMobile } = useResponsive();

    return (
      <div className='controls'>
        {isMobile ? (
          <Button
            className='play-pause__btn'
            onClick={togglePlayPause}
            whileHover={{ scale: 1.2 }}
          >
            <Svg icon={isPlaying ? 'pause' : 'play'} />
          </Button>
        ) : (
          <>
            <Button
              className={`repeat__btn ${repeat ? 'enabled' : ''}`}
              onClick={toggleRepeat}
            >
              <Svg icon='repeat' />
            </Button>

            <Button
              className='previous__btn'
              onClick={handlePreviousTrack}
              disabled={disablePrevNextButtons}
            >
              <Svg icon='skip-previous' />
            </Button>

            <Button
              className='play-pause__btn'
              onClick={togglePlayPause}
              whileHover={{ scale: 1.2 }}
            >
              <Svg icon={isPlaying ? 'pause' : 'play'} />
            </Button>

            <Button
              className='next__btn'
              onClick={handleNextTrack}
              disabled={disablePrevNextButtons}
            >
              <Svg icon='skip-next' />
            </Button>
          </>
        )}
      </div>
    );
  }
);

export default Controls;
