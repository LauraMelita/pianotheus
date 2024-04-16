import React, { useState } from 'react';

import { useCollectionContext } from '../../context/CollectionContext';
import { usePlayerContext } from '../../context/PlayerContext';

import Player from './components/Player';
import Track from './components/Track';
import Controls from './components/Controls';
import ProgressBar from './components/ProgressBar';
import VolumeBar from './components/VolumeBar';

import './AudioPlayer.scss';

const AudioPlayer = ({ data }) => {
  const { isClassical } = useCollectionContext();
  const { isPlaying, pause, handlePlayPause, activeSong } = usePlayerContext();

  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [playbackProgress, setPlaybackProgress] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [repeat, setRepeat] = useState(false);

  const handleOnEnded = () => {
    setCurrentTime(0);
    pause();
  };

  return (
    <div className='player'>
      <Player
        src={activeSong?.audioUrl}
        volume={volume}
        isPlaying={isPlaying}
        currentTime={currentTime}
        repeat={repeat}
        onTimeUpdate={(e) => setPlaybackProgress(e.target.currentTime)}
        onLoadedData={(e) => setDuration(e.target.duration)}
        onEnded={handleOnEnded}
      />

      <Track
        title={activeSong?.title}
        work={activeSong?.work}
        artist={data.composer}
        cover={isClassical ? data.composerImg : data.poster}
      />

      <div className='player__actions'>
        <Controls
          isPlaying={isPlaying}
          handlePlayPause={handlePlayPause}
          repeat={repeat}
          setRepeat={setRepeat}
        />

        <ProgressBar
          value={[playbackProgress]}
          min={0}
          max={duration}
          onChange={(e) => setCurrentTime(...e)}
          handleBackward={() => setCurrentTime(playbackProgress - 15)}
          handleForward={() => setCurrentTime(playbackProgress + 15)}
        />
      </div>

      <VolumeBar
        value={volume}
        min={0}
        max={1}
        step={0.1}
        onChange={(e) => setVolume(...e)}
        toggleMute={() => setVolume(volume === 0 ? 1 : 0)}
      />
    </div>
  );
};

export default AudioPlayer;
