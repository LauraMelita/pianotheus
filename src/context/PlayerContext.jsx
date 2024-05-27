import { createContext, useState, useContext } from 'react';

const PlayerContext = createContext({
  currentSongs: [],
  activeSong: {},
  currentIndex: 0,
  showPlaybar: false,
  isPlaying: false,
  setShowPlaybar: () => {},
  play: () => {},
  pause: () => {},
  togglePlayPause: () => {},
  selectSong: () => {},
  resetActiveSong: () => {},
  switchSong: () => {},
});

export const PlayerProvider = ({ children }) => {
  const [currentSongs, setCurrentSongs] = useState([]);
  const [activeSong, setActiveSong] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPlaybar, setShowPlaybar] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = () => setIsPlaying(true);
  const pause = () => setIsPlaying(false);
  const togglePlayPause = () => setIsPlaying((prev) => !prev);

  const selectSong = (song, songIndex, songs) => {
    setActiveSong(song);
    setCurrentSongs(songs);
    setCurrentIndex(songIndex);
  };

  const resetActiveSong = () => {
    setActiveSong({});
    setCurrentIndex(0);
  };

  const switchSong = (songIndex) => {
    setActiveSong(currentSongs[songIndex]);
    setCurrentIndex(songIndex);
  };

  return (
    <PlayerContext.Provider
      value={{
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
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayerContext = () => useContext(PlayerContext);
