import React from 'react';

import { extractRgbValues } from '../../../utils/formatting';

const Backdrop = ({ backdropImg, rgbBgColor, opacity = 0.6, blend = 0.9 }) => {
  const rgbValues = extractRgbValues(rgbBgColor);

  return (
    <div
      className='backdrop'
      style={{
        backgroundImage: `linear-gradient(
          to bottom,
          rgba(15, 15, 15, 0),
          ${rgbBgColor}
          ),
          linear-gradient(to bottom, rgba(${rgbValues}, ${opacity}), rgba(21, 21, 21, ${blend})),
          url(${backdropImg}`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
      }}
    />
  );
};

export default Backdrop;
