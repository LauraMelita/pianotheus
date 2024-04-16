import React from 'react';

import { GLOBAL_STYLES } from '../../../utils/constants';

const Backdrop = ({ image, height = '50%', opacity = 0.6, blend = 0.9 }) => {
  return (
    <div
      className='backdrop full-width'
      style={{
        zIndex: '-1',
        position: 'absolute',
        height: '100%',
        width: '100%',
      }}
    >
      <div
        className='backdrop__img'
        style={{
          height,
          backgroundImage: `linear-gradient(to bottom, 
          ${GLOBAL_STYLES.TRANSPARENT_COLOR}, 
          ${GLOBAL_STYLES.BACKGROUND_COLOR}),
         linear-gradient(to bottom, 
          rgba(18, 18, 18, ${opacity}), 
          rgba(21, 21, 21, ${blend})),
         url(${image}`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top',
        }}
      />
    </div>
  );
};

export default Backdrop;
