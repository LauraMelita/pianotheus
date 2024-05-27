import { useRef, useState, useEffect } from 'react';

import { usePlayerContext } from '../context/PlayerContext';

export const useAudioPlayer = () => {
  const audioRef = useRef(null);

  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [songProgress, setSongProgress] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [repeat, setRepeat] = useState(false);

  const {
    currentSongs,
    activeSong,
    currentIndex,
    showPlaybar,
    isPlaying,
    setShowPlaybar,
    play,
    pause,
    togglePlayPause,
    selectSong,
    resetActiveSong,
    switchSong,
  } = usePlayerContext();

  // ============================================================
  // AUDIO PLAYER
  // ============================================================

  const handleOnLoaded = (e) => {
    setDuration(e.target.duration);
  };

  const handlePlaytimeChange = (e) => {
    // The event fires when:
    // a) the play time of the media changes
    // b) the media is playing
    // c) the user moves the play position
    setSongProgress(e.target.currentTime);
  };

  const handleOnEnded = () => {
    setCurrentTime(0);
    pause();
  };

  // ============================================================
  // CONTROLS
  // ============================================================

  const toggleRepeat = () => {
    setRepeat((prev) => !prev);
  };

  const handlePreviousTrack = () => {
    let songIndex = currentIndex;

    do {
      // If the current index is 0, go to the last array element, else decrement the index by 1.
      songIndex = songIndex === 0 ? currentSongs.length - 1 : songIndex - 1;

      // Continue looping while the song at the current index has no audioUrl and it is not the same as the original current index.
    } while (!currentSongs[songIndex]?.audioUrl && songIndex !== currentIndex);

    switchSong(songIndex);
  };

  const handleNextTrack = () => {
    let songIndex = currentIndex;

    do {
      // Increment the index by 1 and loop back to the start of the array if needed.
      songIndex = (songIndex + 1) % currentSongs.length;

      // Continue looping while the song at the current index has no audioUrl and it is not the same as the original current index.
    } while (!currentSongs[songIndex]?.audioUrl && songIndex !== currentIndex);

    switchSong(songIndex);
  };

  const isOnlyOnePlayableSong = (songs) => {
    const songsWithAudioUrl = songs.filter((song) => song.audioUrl);
    return songsWithAudioUrl.length === 1;
  };

  // ============================================================
  // PROGRESS BAR
  // ============================================================

  const handleProgressBarChange = (value) => {
    setCurrentTime(...value);
  };

  const handleSkipBackward = () => {
    setCurrentTime(songProgress - 15);
  };

  const handleSkipForward = () => {
    setCurrentTime(songProgress + 15);
  };

  // ============================================================
  // VOLUME
  // ============================================================

  const handleVolumeChange = (value) => {
    setVolume(...value);
  };

  const toggleMute = () => {
    setVolume(volume === 0 ? 0.5 : 0);
  };

  // ============================================================
  // PLAY BUTTON (TABLE)
  // ============================================================

  const handlePlaySong = (song, songIndex, currentSongs) => {
    if (!showPlaybar) setShowPlaybar(true);
    selectSong(song, songIndex, currentSongs);
    play();
  };

  const isActiveSongPlaying = (songTitle) =>
    songTitle === activeSong.title && isPlaying;

  // ============================================================
  // STICKY PLAYBAR
  // ============================================================

  const closePlaybar = () => {
    resetActiveSong();
    handleOnEnded();
    setShowPlaybar(false);
  };

  // ============================================================
  // SYNCHRONIZATION:
  // Keeps the audio HTML element in sync with the state
  // ============================================================

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, activeSong]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = currentTime;
    }
  }, [currentTime]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return {
    // Global State
    activeSong,
    showPlaybar,
    isPlaying,
    togglePlayPause,

    // Ref
    audioRef,

    // Audio Player
    currentTime,
    songProgress,
    repeat,
    duration,
    volume,
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
    isOnlyOnePlayableSong,

    // Playbar
    closePlaybar,

    // Play Button
    handlePlaySong,
    isActiveSongPlaying,
  };
};
