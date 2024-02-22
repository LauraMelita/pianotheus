import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import CollectionList from '../collection/CollectionList';
import CollectionItems from '../collection/CollectionItems';

const InfiniteResults = ({ data, fetchNextPage, hasNextPage }) => {
  const { ref: loadMoreRef, inView } = useInView();

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);

  return (
    <>
      <CollectionList displayMode='infinite'>
        {data?.pages.map((pageData, index) => (
          <CollectionItems key={`page-${index}`} data={pageData} />
        ))}
      </CollectionList>

      {hasNextPage && <div ref={loadMoreRef} />}
    </>
  );
};

export default InfiniteResults;
