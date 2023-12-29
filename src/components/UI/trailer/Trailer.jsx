import React from 'react';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';

const Trailer = ({ aspectRatio, title, trailerKey }) => {
  return (
    <div className='trailer'>
      <AspectRatio.Root ratio={aspectRatio}>
        <iframe
          title={title}
          src={`https://www.youtube.com/embed/${trailerKey}`}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        />
      </AspectRatio.Root>
    </div>
  );
};

export default Trailer;
