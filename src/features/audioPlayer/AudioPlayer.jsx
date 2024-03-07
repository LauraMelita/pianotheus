import React, { useState } from 'react';

import { usePlayerContext } from '../../context/PlayerContext';

import Player from './components/Player';
import Track from './components/Track';
import Controls from './components/Controls';
import ProgressBar from './components/ProgressBar';
import VolumeBar from './components/VolumeBar';

import './AudioPlayer.scss';

const AudioPlayer = ({ data }) => {
  const { isPlaying, play, pause, activeSong } = usePlayerContext();

  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [playbackProgress, setPlaybackProgress] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [repeat, setRepeat] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  const handleOnEnded = () => {
    setCurrentTime(0);
    pause();
  };

  return (
    <div className='player'>
      <Player
        src={activeSong?.audio}
        volume={volume}
        isPlaying={isPlaying}
        currentTime={currentTime}
        repeat={repeat}
        onTimeUpdate={(e) => setPlaybackProgress(e.target.currentTime)}
        onLoadedData={(e) => setDuration(e.target.duration)}
        onEnded={handleOnEnded}
      />
      <Track
        title={activeSong?.score}
        artist={data.composer}
        cover={data.composerImg}
      />
      <div className='player__actions'>
        <Controls
          isPlaying={isPlaying}
          handlePlayPause={handlePlayPause}
          repeat={repeat}
          setRepeat={setRepeat}
        />
        <ProgressBar
          value={playbackProgress}
          min={0}
          max={duration}
          onInput={(e) => setCurrentTime(e.target.value)}
          setCurrentTime={setCurrentTime}
          playbackProgress={playbackProgress}
        />
      </div>
      <VolumeBar
        value={volume}
        min={0}
        max={1}
        onChange={(e) => setVolume(+e.target.value)}
        toggleMute={() => setVolume(volume === 0 ? 1 : 0)}
      />
    </div>
  );
};

export default AudioPlayer;
