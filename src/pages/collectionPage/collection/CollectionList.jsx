import React from 'react';

import { useCollectionContext } from '../../../context/CollectionContext';

const CollectionList = ({ type, children, ...props }) => {
  const { isClassical } = useCollectionContext();

  return (
    <ul className={`${isClassical ? 'composers' : 'posters'}`} {...props}>
      {children}
    </ul>
  );
};

export default CollectionList;
