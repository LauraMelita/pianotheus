import React from 'react';

import { useCollectionContext } from '../../../context/CollectionContext';

const CollectionList = ({ displayMode, children }) => {
  const { isClassical } = useCollectionContext();

  return (
    <ul
      id={`${displayMode}-results`}
      className={`${isClassical ? 'composers' : 'posters'}`}
    >
      {children}
    </ul>
  );
};

export default CollectionList;
