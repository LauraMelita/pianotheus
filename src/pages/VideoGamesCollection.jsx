import React, { useContext } from 'react';

import { VideoGamesContext } from '../context/VideoGamesContext';

import AnimatedBackground from '../components/UI/animation/background/AnimatedBackground';
import TitlesList from '../components/TitlesList';
import Spinner from '../components/UI/spinner/Spinner';
import MoveBackButton from '../components/UI/button/MoveBackButton';

import BackWrapImage from '../assets/images/animatedBackground/backwrap.png';

const VideoGamesCollection = () => {
  const { data, isLoading, error } = useContext(VideoGamesContext);

  return (
    <main>
      <AnimatedBackground
        elements={['circle', 'triangle', 'cross', 'square']}
        repeat={10}
        backWrap={BackWrapImage}
      />

      <div
        className='videoGames-collection'
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {isLoading && <Spinner />}
        {!isLoading && !error && <TitlesList data={data} />}
        {error && <h3>{error}</h3>}
      </div>
      <MoveBackButton />
    </main>
  );
};

export default VideoGamesCollection;
