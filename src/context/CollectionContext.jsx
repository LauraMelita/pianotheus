import { createContext, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { siteConfig } from '../utils/config';

export const CollectionContext = createContext({});

export const CollectionProvider = ({ children }) => {
  const { pathname } = useLocation();

  const [currentCollection] = siteConfig.collections.filter(({ collection }) =>
    pathname.includes(collection)
  );

  const isClassical = currentCollection.collection === 'classical';

  return (
    <CollectionContext.Provider
      value={{
        collection: currentCollection.collection,
        routeParam: currentCollection.routeParam,
        searchKeys: currentCollection.searchKeys,
        filterOptions: currentCollection.filterOptions,
        isClassical,
      }}
    >
      {children}
    </CollectionContext.Provider>
  );
};

export const useCollectionContext = () => useContext(CollectionContext);
