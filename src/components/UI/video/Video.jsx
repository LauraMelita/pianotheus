import React from 'react';

const Video = ({ aspectRatio = 16 / 9, title, videoKey, autoPlay }) => {
  return (
    <div className='video' style={{ aspectRatio }}>
      <iframe
        title={title}
        src={`https://www.youtube.com/embed/${videoKey}${
          autoPlay && '?&autoplay=1'
        }`}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
        style={{ aspectRatio }}
      />
    </div>
  );
};

export default Video;
