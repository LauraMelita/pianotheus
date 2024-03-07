import React, { useRef, useEffect } from 'react';

const Player = ({
  src,
  volume,
  isPlaying,
  currentTime,
  repeat,
  onTimeUpdate,
  onLoadedData,
  onEnded,
}) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    audioRef.current.currentTime = currentTime;
  }, [currentTime]);

  return (
    <audio
      ref={audioRef}
      src={src}
      loop={repeat}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
      onEnded={onEnded}
    />
  );
};

export default Player;
