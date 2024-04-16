import React from 'react';

import { usePlayerContext } from '../../../../../context/PlayerContext';

import Svg from '../../../../../components/UI/svg/Svg';
import Button from '../../../../../components/UI/button/Button';
import SoundWaves from '../../../../../components/UI/animation/waves/SoundWaves';
import Tooltip from '../../../../../components/UI/tooltip/Tooltip';

const PlayAudioButton = ({ score, index }) => {
  const { selectSong, play, isActiveSongPlaying } = usePlayerContext();

  const isPlaying = isActiveSongPlaying(score.title);
  const hasAudio = score.audioUrl;

  const handleClick = async () => {
    selectSong(score, index);
    play();
  };

  const AudioButton = () => {
    return !hasAudio ? (
      <Tooltip content='Audio unavailable' offset={5}>
        {/* The tooltip doesn't work on a disabled button, using a <span> as a workaround */}
        <span className='play-midi__btn disabled'>
          <Svg icon='play' />
        </span>
      </Tooltip>
    ) : (
      <Button
        className='play-midi__btn'
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
      >
        <Svg icon='play' />
      </Button>
    );
  };

  return isPlaying ? <SoundWaves bars={3} barWidth={3} /> : <AudioButton />;
};

export default PlayAudioButton;
