import React from 'react';

import {
  Composer,
  Title,
  PlatformIcons,
  Poster,
  Genres,
  Rating,
  Date,
  Playtime,
  Developers,
  Platforms,
  Website,
  Esrb,
} from '../elements/Details';

import ReadMore from '../../../../features/readMore/ReadMore';
import Screenshots from '../../../../features/screenshots/Screenshots';
import Trailer from '../../../../features/trailer/Trailer';

const VideoGame = ({ data }) => {
  return (
    <>
      <Composer
        composer={data.composer}
        composerImg={data.composerImg}
        scores={data.scores}
      />
      <Title title={data.title} />
      <PlatformIcons platformIcons={data.mainPlatforms} />
      <Poster img={data.poster} title={data.title} />
      <Genres genres={data.genres} />
      <Rating value={data.rating} maxValue={5} source='Metacritic' />
      <Date type='Release date' date={data.released} />
      <ReadMore text={data.description} />
      <Playtime playtime={data.playtime} />
      <Developers developers={data.developers} />
      <Platforms platforms={data.platforms} />
      <Esrb
        rating={data.esrb.rating}
        descriptor={data.esrb.descriptor}
        icon={data.esrb.icon}
      />
      <Website link={data.website} />
      <Trailer title={data.title} videoKey={data.trailer} />
      <Screenshots screenshots={data.screenshots} />
    </>
  );
};

export default VideoGame;
