import React from 'react';

import {
  Composer,
  Title,
  Poster,
  Genres,
  Rating,
  ContentRating,
  Date,
  Director,
  Writer,
  Actors,
  Runtime,
  Tagline,
  Country,
  SpokenLanguages,
  ProductionCompanies,
  BoxOffice,
  Awards,
  Website,
} from '../elements/Details';
import ReadMore from '../../../../features/readMore/ReadMore';
import Screenshots from '../../../../features/screenshots/Screenshots';
import Trailer from '../../../../features/trailer/Trailer';

const Movie = ({ data }) => {
  return (
    <>
      <Composer
        composer={data.composer}
        composerImg={data.composerImg}
        scores={data.scores}
      />
      <Title title={data.title} year={data.year} />
      <Poster img={data.poster} title={data.title} />
      <Genres genres={data.genres} />
      <ContentRating rating={data.rated} />
      <ReadMore text={data.plot} />
      <Rating value={data.imdbRating} maxValue={10} source='IMDb' />
      <Date type='Release date' date={data.released} />
      <Director director={data.director} />
      <Writer writer={data.writer} />
      <Actors actors={data.actors} />
      <Runtime runtime={data.runtime} />
      <Tagline tagline={data.tagline} />
      <Country country={data.country} />
      <SpokenLanguages languages={data.spokenLanguages} />
      <ProductionCompanies companies={data.productionCompanies} />
      <BoxOffice boxOffice={data.boxOffice} />
      <Awards awards={data.awards} />
      <Website link={data.website} />
      <Screenshots screenshots={data.screenshots} />
      <Trailer title={data.title} videoKey={data.trailer} />
    </>
  );
};

export default Movie;
