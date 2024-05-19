import React from 'react';

import HorizontalScroller from '../../../../features/horizontalScroller/HorizontalScroller';
import Image from '../../../../components/UI/image/Image';

import './Cast.scss';

const Cast = ({ actors }) => {
  return (
    <>
      <h4>Top Cast</h4>
      <HorizontalScroller
        className='cast'
        data={actors}
        isScrollbarHidden
        isSnapsInline
        isGrouped
        numberOfGroups={2}
      >
        {({ name, profileImage, character }) => (
          <>
            <Image
              src={profileImage}
              alt={name}
              fallbackImage='https://www.shutterstock.com/image-vector/unknown-male-person-illustration-600nw-182014895.jpg'
            />
            <span>{name}</span>
            <span>{character}</span>
          </>
        )}
      </HorizontalScroller>
    </>
  );
};

export default Cast;
