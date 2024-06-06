import React from 'react';

import { useCollectionContext } from '../../../../context/CollectionContext';

import ComposerCard from '../card/composer/ComposerCard';
import PosterCard from '../card/poster/PosterCard';

const CollectionItems = ({ data }) => {
  const { isClassical } = useCollectionContext();

  return data.map(
    ({ id, path, composer, composerImg, title, year, poster, scores }, index) =>
      isClassical ? (
        <ComposerCard
          key={id}
          cardIndex={index}
          path={path}
          title={composer}
          composerImg={composerImg}
        />
      ) : (
        <PosterCard
          key={id}
          cardIndex={index}
          path={path}
          title={title}
          year={year}
          poster={poster}
          composer={composer}
          composerImg={composerImg}
          scores={scores}
        />
      )
  );
};

export default CollectionItems;
