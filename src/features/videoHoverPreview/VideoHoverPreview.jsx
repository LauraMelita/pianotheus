import React, { useRef } from 'react';
import { AdvancedVideo, lazyload } from '@cloudinary/react';
import classNames from 'classnames';

import { cld } from '../../services/cloudinary/config';

import './VideoHoverPreview.scss';

const VideoHoverPreview = ({ className, videoId, aspectRatio, children }) => {
  const playerRef = useRef(null);

  const playVideo = () => {
    playerRef.current?.videoRef.current?.play().catch((error) => {
      console.error('Error playing the video:', error);
    });
  };

  const pauseVideo = () => {
    playerRef.current?.videoRef.current?.play().catch((error) => {
      console.error('Error pausing the video:', error);
    });
  };

  return (
    <div
      className={classNames(className, 'video-preview')}
      style={{ aspectRatio }}
      onMouseOver={playVideo}
      onMouseOut={pauseVideo}
    >
      <div className='video-preview__inner'>{children}</div>
      <AdvancedVideo
        ref={playerRef}
        loop
        muted
        cldVid={cld
          .video(videoId)
          .effect('e_preview:duration_4')
          .delivery('q_auto')
          .format('auto')}
        plugins={[lazyload()]}
      />
    </div>
  );
};

export default VideoHoverPreview;
