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
  setSelectedSong: () => {},
});

export const PlayerProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongs, setCurrentSongs] = useState([]);
  const [activeSong, setActiveSong] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const play = () => setIsPlaying(true);

  const pause = () => setIsPlaying(false);

  const selectSong = (song, index) => {
    setActiveSong(song);
    setCurrentIndex(index);
    setIsActive(true);
  };

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
        selectSong,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayerContext = () => useContext(PlayerContext);
