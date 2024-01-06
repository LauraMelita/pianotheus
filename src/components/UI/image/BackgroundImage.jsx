import React from 'react';

const BlendInImage = ({
  zIndex,
  gradient,
  url,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat = 'no-repeat',
}) => {
  const TRANSPARENT_COLOR = 'rgba(255, 255, 255, 0)';
  const BACKGROUND_COLOR = 'var(--layout-background-color)';

  const setBackgroundImage = () => {
    if (gradient) {
      switch (gradient.type) {
        case 'linear':
          return `linear-gradient(
            ${gradient.direction}, 
            ${TRANSPARENT_COLOR} ${gradient.transparentPosition}, 
            ${BACKGROUND_COLOR} ${gradient.bgPosition}), 
            url(${url})`;

        case 'radial':
          return `radial-gradient(
            ${gradient.shape}, 
            ${TRANSPARENT_COLOR} ${gradient.transparentPosition}, 
            ${BACKGROUND_COLOR} ${gradient.bgPosition}), 
            url(${url})`;

        default:
          return null;
      }
    }

    if (!gradient) return `url(${url})`;
  };

  return (
    <div
      className='background-image'
      style={{
        zIndex,
        backgroundImage: setBackgroundImage(),
        backgroundSize,
        backgroundPosition,
        backgroundRepeat,
      }}
    />
  );
};

export default BlendInImage;
