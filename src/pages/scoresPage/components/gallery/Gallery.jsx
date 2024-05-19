import React from 'react';

import Trailer from '../../../../features/trailer/Trailer';
import Screenshots from '../../../../features/screenshots/Screenshots';

import './Gallery.scss';

const Gallery = ({ title, trailer, screenshots }) => {
  return (
    <div className='gallery'>
      <h4>Gallery</h4>
      <div>
        <Trailer title={title} videoKey={trailer} />
        <Screenshots screenshots={screenshots} />
      </div>
    </div>
  );
};

export default Gallery;
