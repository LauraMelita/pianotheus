import { createContext, useState, useContext } from 'react';

const PlayerContext = createContext({
  isPlaying: false,
  currentSongs: [],
  activeSong: {},
  currentIndex: 0,
  isActive: false,
  setCurrentSongs: () => {},
  play: () => {},
  pause: () => {},
  handlePlayPause: () => {},
  setSelectedSong: () => {},
  isActiveSongPlaying: () => {},
});

export const PlayerProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongs, setCurrentSongs] = useState([]);
  const [activeSong, setActiveSong] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const play = () => setIsPlaying(true);

  const pause = () => setIsPlaying(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  const selectSong = (song, index) => {
    setActiveSong(song);
    setCurrentIndex(index);
    setIsActive(true);
  };

  const isActiveSongPlaying = (songTitle) =>
    songTitle === activeSong.title && isPlaying;

  return (
    <PlayerContext.Provider
      value={{
        isPlaying,
        currentSongs,
        activeSong,
        currentIndex,
        isActive,
        setCurrentSongs,
        play,
        pause,
        handlePlayPause,
        selectSong,
        isActiveSongPlaying,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayerContext = () => useContext(PlayerContext);
