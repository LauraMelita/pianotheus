import React from 'react';

import { useResponsive } from '../../../../../hooks/useResponsive';

import Poster from '../../../components/poster/Poster';
import Title from '../../../components/title/Title';
import Spec from '../../../components/spec/Spec';
import Description from '../../../components/description/Description';
import Crew from '../../../components/crew/Crew';
import Rating from '../../../components/rating/Rating';
import Tagline from '../../../components/tagline/Tagline';
import Genres from '../../../components/genres/Genres';

import { formatDate } from '../../../../../utils/formatting';

const MovieDetails = ({ data }) => {
  const { isDesktop, isLaptop } = useResponsive();

  const specItems = [
    formatDate(data.released),
    data.rated,
    `${data.runtime} min`,
  ];

  return (
    <div className='details'>
      <Poster className='details__poster' image={data.poster} />
      <div className='details__content'>
        <div>
          <div className='details__header'>
            <Title title={data.title} year={data.year} />
            <Spec items={specItems} />
            {(isDesktop || isLaptop) && (
              <Description text={data.plot} maxWords={70} />
            )}
            <Tagline tagline={data.tagline} />
            <Crew directors={data.directors} writers={data.writers} />
          </div>
          <Rating source='IMDb' value={data.imdbRating} maxValue={10} />
        </div>
        <div>
          <Genres genres={data.genres} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
