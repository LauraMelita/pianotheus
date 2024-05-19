import React from 'react';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';

const Video = ({ aspectRatio = 16 / 9, title, videoKey, autoPlay }) => {
  return (
    <div className='video'>
      <AspectRatio.Root ratio={aspectRatio}>
        <iframe
          title={title}
          src={`https://www.youtube.com/embed/${videoKey}${
            autoPlay && '?&autoplay=1'
          }`}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        />
      </AspectRatio.Root>
    </div>
  );
};

export default Video;
