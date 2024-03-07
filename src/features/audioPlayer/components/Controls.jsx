import React from 'react';

import Button from '../../../components/UI/button/Button';
import Svg from '../../../components/UI/svg/Svg';

const Controls = ({ isPlaying, handlePlayPause, repeat, setRepeat }) => {
  return (
    <div className='controls'>
      <Button
        className={`repeat__btn ${repeat ? 'enabled' : ''}`}
        onClick={() => setRepeat((prev) => !prev)}
      >
        <Svg icon='repeat' />
      </Button>

      <Button className='previous__btn' onClick={() => {}}>
        <Svg icon='skip-previous' />
      </Button>

      <Button
        className='play-pause__btn'
        onClick={handlePlayPause}
        whileHover={{ scale: 1.2 }}
      >
        <Svg icon={isPlaying ? 'pause' : 'play'} />
      </Button>

      <Button className='next__btn' onClick={() => {}}>
        <Svg icon='skip-next' />
      </Button>
    </div>
  );
};

export default Controls;
