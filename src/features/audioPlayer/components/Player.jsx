import React, { memo } from 'react';

const Player = memo(
  ({
    audioRef,
    src,
    repeat,
    handleOnLoaded,
    handlePlaytimeChange,
    handleOnEnded,
  }) => {
    return (
      <audio
        ref={audioRef}
        src={src}
        loop={repeat}
        onLoadedData={(e) => handleOnLoaded(e)}
        onTimeUpdate={(e) => handlePlaytimeChange(e)}
        onEnded={handleOnEnded}
      />
    );
  }
);

export default Player;
