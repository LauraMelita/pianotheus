import React from 'react';

import { useAudioPlayer } from '../../../../../../hooks/useAudioPlayer';

import Svg from '../../../../../../components/UI/svg/Svg';
import Button from '../../../../../../components/UI/button/Button';
import SoundWaves from '../../../../../../components/UI/animation/waves/SoundWaves';
import Tooltip from '../../../../../../components/UI/tooltip/Tooltip';

const PlayAudioButton = ({ score, scoreIndex, scores }) => {
  const { handlePlaySong, isActiveSongPlaying } = useAudioPlayer();

  const isPlaying = isActiveSongPlaying(score.title);
  const hasAudio = score.audioUrl;

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
        onClick={() => handlePlaySong(score, scoreIndex, scores)}
        whileHover={{ scale: 1.1 }}
      >
        <Svg icon='play' />
      </Button>
    );
  };

  return isPlaying ? <SoundWaves bars={3} barWidth={3} /> : <AudioButton />;
};

export default PlayAudioButton;
