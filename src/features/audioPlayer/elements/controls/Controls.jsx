import React, { memo } from 'react';
import classNames from 'classnames';

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

    // prettier-ignore
    const repeatBtnClasses = classNames('repeat__btn', {
      'enabled': repeat,
    });

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
            <Button className={repeatBtnClasses} onClick={toggleRepeat}>
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
