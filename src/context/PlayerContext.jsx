import { createContext, useState, useCallback, useContext } from 'react';

const PlayerContext = createContext({
  currentSongs: [],
  activeSong: {},
  currentIndex: 0,
  showPlaybar: false,
  isPlaying: false,
  repeat: false,
  setShowPlaybar: () => {},
  play: () => {},
  pause: () => {},
  togglePlayPause: () => {},
  selectSong: () => {},
  resetActiveSong: () => {},
  switchSong: () => {},
  toggleRepeat: () => {},
});

export const PlayerProvider = ({ children }) => {
  const [currentSongs, setCurrentSongs] = useState([]);
  const [activeSong, setActiveSong] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPlaybar, setShowPlaybar] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [repeat, setRepeat] = useState(false);

  const play = useCallback(() => setIsPlaying(true), []);
  const pause = useCallback(() => setIsPlaying(false), []);
  const togglePlayPause = useCallback(() => setIsPlaying((prev) => !prev), []);

  const toggleRepeat = useCallback(() => {
    setRepeat((prev) => !prev);
  }, []);

  const selectSong = useCallback((song, songIndex, songs) => {
    setActiveSong(song);
    setCurrentSongs(songs);
    setCurrentIndex(songIndex);
  }, []);

  const resetActiveSong = useCallback(() => {
    setActiveSong({});
    setCurrentIndex(0);
  }, []);

  const switchSong = useCallback(
    (songIndex) => {
      setActiveSong(currentSongs[songIndex]);
      setCurrentIndex(songIndex);
    },
    [currentSongs]
  );

  return (
    <PlayerContext.Provider
      value={{
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
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayerContext = () => useContext(PlayerContext);
