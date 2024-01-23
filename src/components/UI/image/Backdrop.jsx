import React from 'react';

import { GLOBAL_STYLES } from '../../../utils/constants';

const Backdrop = ({ className, image, opacity = 0.6, blend = 0.9 }) => {
  return (
    <div
      className={className ? className : 'backdrop'}
      style={{
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
  );
};

export default Backdrop;
