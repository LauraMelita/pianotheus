import React from 'react';

import {
  Composer,
  Title,
  Poster,
  SeasonsAndEpisodes,
  Genres,
  Rating,
  ContentRating,
  Date,
  Actors,
  Runtime,
  Tagline,
  Country,
  SpokenLanguages,
  ProductionCompanies,
  Awards,
  Website,
} from '../elements/Details';
import ReadMore from '../../../../features/readMore/ReadMore';
import Screenshots from '../../../../features/screenshots/Screenshots';
import Trailer from '../../../../features/trailer/Trailer';

const TVShow = ({ data }) => {
  return (
    <>
      <Composer
        composer={data.composer}
        composerImg={data.composerImg}
        scores={data.scores}
      />
      <Title
        title={data.title}
        originalTitle={data.originalName}
        year={data.year}
      />
      <Poster img={data.poster} title={data.title} />
      <SeasonsAndEpisodes seasons={data.seasons} episodes={data.episodes} />
      <Genres genres={data.genres} />
      <ContentRating rating={data.rated} />
      <ReadMore text={data.plot} />
      <Rating value={data.imdbRating} maxValue={10} source='IMDb' />
      <Date type='First air date' date={data.firstAirDate} />
      <Actors actors={data.actors} />
      <Runtime runtime={data.runtime} />
      <Tagline tagline={data.tagline} />
      <Country country={data.country} />
      <SpokenLanguages languages={data.language} />
      <ProductionCompanies companies={data.productionCompanies} />
      <Awards awards={data.awards} />
      <Website link={data.website} />
      <Screenshots screenshots={data.screenshots} />
      <Trailer title={data.title} videoKey={data.trailer} />
    </>
  );
};

export default TVShow;
