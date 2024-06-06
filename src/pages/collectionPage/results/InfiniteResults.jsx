import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import CollectionList from '../components/collection/CollectionList';
import CollectionItems from '../components/collection/CollectionItems';

import SkeletonCollection from '../components/skeleton/SkeletonCollection';

const InfiniteResults = ({ data, isLoading, fetchNextPage, hasNextPage }) => {
  const { ref: loadMoreRef, inView } = useInView();

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);

  if (isLoading) return <SkeletonCollection />;
  return (
    <>
      <CollectionList>
        {data?.pages.map((pageData, index) => (
          <CollectionItems key={`page-${index}`} data={pageData} />
        ))}
      </CollectionList>

      {hasNextPage && (
        <div className='load-more__indicator' ref={loadMoreRef} />
      )}
    </>
  );
};

export default InfiniteResults;
