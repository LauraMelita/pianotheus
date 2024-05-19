import React from 'react';

import Image from '../../../../components/UI/image/Image';

const Poster = ({ className, image }) => {
  return <Image className={className} src={image} alt='poster' />;
};

export default Poster;
