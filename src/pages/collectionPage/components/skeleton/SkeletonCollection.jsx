import React from 'react';

import { useCollectionContext } from '../../../../context/CollectionContext';

import { Skeleton, SkeletonItem } from '../../../../features/skeleton/Skeleton';

import { siteConfig } from '../../../../utils/config';

import './SkeletonCollection.scss';

const SkeletonCollection = () => {
  const { isClassical } = useCollectionContext();

  const skeletonItems = Array.from({
    length: siteConfig.infiniteScroll.resultsPerPage,
  });

  return isClassical ? (
    <Skeleton className='composers'>
      {skeletonItems.map((_, index) => (
        <li key={index} className='composer'>
          <SkeletonItem />
          <SkeletonItem />
        </li>
      ))}
    </Skeleton>
  ) : (
    <Skeleton className='posters'>
      {skeletonItems.map((_, index) => (
        <li key={index} className='poster'>
          <SkeletonItem className='poster__card' />
          <div className='poster__title'>
            <SkeletonItem />
            <SkeletonItem />
          </div>
        </li>
      ))}
    </Skeleton>
  );
};

export default SkeletonCollection;
