import React from 'react';
import Plx from 'react-plx';

const PrallaxLayer = ({ layer, src, layerData }) => {
  return (
    <Plx className={layer} parallaxData={layerData}>
      <img src={src} alt={layer} />
    </Plx>
  );
};

export default PrallaxLayer;
