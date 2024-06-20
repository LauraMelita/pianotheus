import React from 'react';

import HorizontalScroller from '../../../../features/horizontalScroller/HorizontalScroller';
import Image from '../../../../components/UI/image/Image';

import './Cast.scss';

const Cast = ({ actors }) => {
  return (
    <div className='cast'>
      <h3 className='heading heading-lb'>Top Cast</h3>
      <HorizontalScroller data={actors} numberOfGroups={2} itemGap={60}>
        {({ name, profileImage }) => (
          <>
            <Image
              src={profileImage}
              alt={name}
              fallbackImage='https://www.shutterstock.com/image-vector/unknown-male-person-illustration-600nw-182014895.jpg'
            />
            <span>{name}</span>
          </>
        )}
      </HorizontalScroller>
    </div>
  );
};

export default Cast;
