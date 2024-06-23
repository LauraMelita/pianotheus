import { useRef, useState, useEffect, useCallback } from 'react';
import { usePlayerContext } from '../context/PlayerContext';

export const useAudioPlayer = () => {
  const audioRef = useRef(null);

  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [songProgress, setSongProgress] = useState(0);
  const [volume, setVolume] = useState(0.5);

  const {
    currentSongs,
    activeSong,
    currentIndex,
    showPlaybar,
    isPlaying,
    repeat,
    setShowPlaybar,
    play,
    pause,
    togglePlayPause,
    selectSong,
    resetActiveSong,
    switchSong,
    toggleRepeat,
  } = usePlayerContext();

  // ============================================================
  // AUDIO PLAYER
  // ============================================================

  const handleOnLoaded = useCallback((e) => {
    setDuration(e.target.duration);
  }, []);

  const handlePlaytimeChange = useCallback((e) => {
    setSongProgress(e.target.currentTime);
  }, []);

  const handleOnEnded = useCallback(() => {
    setCurrentTime(0);
    pause();
  }, [pause]);

  // ============================================================
  // CONTROLS
  // ============================================================

  const handlePreviousTrack = useCallback(() => {
    let songIndex = currentIndex;

    do {
      songIndex = songIndex === 0 ? currentSongs.length - 1 : songIndex - 1;
    } while (!currentSongs[songIndex]?.audioUrl && songIndex !== currentIndex);

    switchSong(songIndex);
  }, [currentIndex, currentSongs, switchSong]);

  const handleNextTrack = useCallback(() => {
    let songIndex = currentIndex;

    do {
      songIndex = (songIndex + 1) % currentSongs.length;
    } while (!currentSongs[songIndex]?.audioUrl && songIndex !== currentIndex);

    switchSong(songIndex);
  }, [currentIndex, currentSongs, switchSong]);

  const isOnlyOnePlayableSong = useCallback((songs) => {
    const songsWithAudioUrl = songs.filter((song) => song.audioUrl);
    return songsWithAudioUrl.length === 1;
  }, []);

  // ============================================================
  // PROGRESS BAR
  // ============================================================

  const handleProgressBarChange = useCallback((value) => {
    setCurrentTime(...value);
  }, []);

  const handleSkipBackward = useCallback(() => {
    setCurrentTime(songProgress - 15);
  }, [songProgress]);

  const handleSkipForward = useCallback(() => {
    setCurrentTime(songProgress + 15);
  }, [songProgress]);

  // ============================================================
  // VOLUME
  // ============================================================

  const handleVolumeChange = useCallback((value) => {
    setVolume(...value);
  }, []);

  const toggleMute = useCallback(() => {
    setVolume((prevVolume) => (prevVolume === 0 ? 0.5 : 0));
  }, []);

  // ============================================================
  // PLAY BUTTON (TABLE)
  // ============================================================

  const handlePlaySong = useCallback(
    (song, songIndex, currentSongs) => {
      if (!showPlaybar) setShowPlaybar(true);
      selectSong(song, songIndex, currentSongs);
      play();
    },
    [showPlaybar, setShowPlaybar, selectSong, play]
  );

  const isActiveSongPlaying = useCallback(
    (songTitle) => songTitle === activeSong.title && isPlaying,
    [activeSong.title, isPlaying]
  );

  // ============================================================
  // STICKY PLAYBAR
  // ============================================================

  const closePlaybar = useCallback(() => {
    resetActiveSong();
    handleOnEnded();
    setShowPlaybar(false);
  }, [resetActiveSong, handleOnEnded, setShowPlaybar]);

  const handlePauseSong = useCallback(() => {
    if (isPlaying) pause();
  }, [isPlaying, pause]);

  // ============================================================
  // SYNCHRONIZATION:
  // Keeps the audio HTML element in sync with the state
  // ============================================================

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play().catch((error) => {
        console.error('Error playing the audio:', error);
      });
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
    repeat,
    toggleRepeat,

    // Ref
    audioRef,

    // Audio Player
    currentTime,
    songProgress,
    duration,
    volume,
    handleOnLoaded,
    handlePlaytimeChange,
    handleOnEnded,
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
    handlePauseSong,
    isActiveSongPlaying,
  };
};
