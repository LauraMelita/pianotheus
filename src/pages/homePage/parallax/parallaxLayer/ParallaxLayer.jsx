import React from 'react';

import BackgroundImage from '../../../../components/UI/image/BackgroundImage';

const ParallaxLayer = ({ layer, stackOrder, src, children, ...props }) => {
  return (
    <BackgroundImage
      className={`parallax__${layer}`}
      zIndex={stackOrder}
      url={src}
      {...props}
    >
      {children}
    </BackgroundImage>
  );
};

export default ParallaxLayer;
