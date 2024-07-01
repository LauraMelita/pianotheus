import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { useElementSize } from '@mantine/hooks';

import { useResponsive } from '../../../../hooks/useResponsive';
import { useAnimations } from '../../../../hooks/useAnimations';

import Badge from '../../../../components/UI/badge/Badge';

import './Track.scss';

const Track = memo(({ title, work, artist, cover }) => {
  const { ref: containerRef, width: containerWidth } = useElementSize();
  const { ref: textRef, width: textWidth } = useElementSize();
  const { isMobile } = useResponsive();
  const { marquee } = useAnimations();

  const coverSize = isMobile ? 40 : 56;
  const gap = 10;
  const speed = 40;

  const position = -(textWidth - containerWidth + gap + coverSize);
  const duration = Math.abs(position) / speed;

  return (
    <div
      ref={containerRef}
      className='track'
      style={{
        gridTemplateColumns: `[cover] ${coverSize}px [track] auto`,
        gap: `${gap}px`,
      }}
    >
      <Badge
        className='cover'
        image={cover}
        title={artist}
        width={coverSize}
        height={coverSize}
        borderRadius='10%'
      />
      <div className='track__info'>
        <motion.span
          ref={textRef}
          className='track__title'
          variants={marquee(position, duration)}
          animate='animate'
        >
          {work ? `${work}: ${title}` : title}
        </motion.span>
        <span className='track__artist'>{artist}</span>
      </div>
    </div>
  );
});

export default Track;
