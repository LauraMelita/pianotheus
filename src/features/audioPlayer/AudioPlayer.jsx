import React from 'react';

import { useCollectionContext } from '../../context/CollectionContext';
import { useAudioPlayer } from '../../hooks/useAudioPlayer';

import Player from './components/Player';
import Track from './components/Track';
import Controls from './components/Controls';
import ProgressBar from './components/ProgressBar';
import VolumeBar from './components/VolumeBar';

import './AudioPlayer.scss';

const AudioPlayer = ({ data: { composer, composerImg, poster } }) => {
  const { isClassical } = useCollectionContext();
  const {
    audioRef,
    activeSong,
    isPlaying,
    repeat,
    songProgress,
    duration,
    volume,
    togglePlayPause,
    handleOnLoaded,
    handlePlaytimeChange,
    handleOnEnded,
    toggleRepeat,
    handlePreviousTrack,
    handleNextTrack,
    handleProgressBarChange,
    handleSkipBackward,
    handleSkipForward,
    handleVolumeChange,
    toggleMute,
  } = useAudioPlayer();

  return (
    <div className='player'>
      <Player
        audioRef={audioRef}
        src={activeSong?.audioUrl}
        repeat={repeat}
        handleOnLoaded={handleOnLoaded}
        handlePlaytimeChange={handlePlaytimeChange}
        handleOnEnded={handleOnEnded}
      />

      <Track
        title={activeSong?.title}
        work={activeSong?.work}
        artist={composer}
        cover={isClassical ? composerImg : poster}
      />

      <div className='player__actions'>
        <Controls
          repeat={repeat}
          toggleRepeat={toggleRepeat}
          handlePreviousTrack={handlePreviousTrack}
          isPlaying={isPlaying}
          togglePlayPause={togglePlayPause}
          handleNextTrack={handleNextTrack}
        />

        <ProgressBar
          songProgress={songProgress}
          min={0}
          max={duration}
          handleProgressBarChange={handleProgressBarChange}
          handleBackward={handleSkipBackward}
          handleForward={handleSkipForward}
        />
      </div>

      <VolumeBar
        volume={volume}
        min={0}
        max={1}
        step={0.1}
        handleVolumeChange={handleVolumeChange}
        toggleMute={toggleMute}
      />
    </div>
  );
};

export default AudioPlayer;
