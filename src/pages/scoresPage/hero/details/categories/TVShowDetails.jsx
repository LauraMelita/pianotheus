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

const TVShowDetails = ({ data }) => {
  const { isDesktop, isLaptop } = useResponsive();

  return (
    <div className='details'>
      <Poster className='details__poster' image={data.poster} />
      <div className='details__content'>
        <div>
          <div className='details__header'>
            <Title title={data.title} originalTitle={data.originalName} />
            <Spec items={[data.year, data.rated, `${data.runtime} min`]} />
            <span>
              {data.seasons} Seasons - {data.episodes} Episodes
            </span>
            {(isDesktop || isLaptop) && (
              <Description text={data.plot} maxWords={70} />
            )}
            <Crew creators={data.creators} />
          </div>
          <Rating source='IMDb' value={data.imdbRating} maxValue={10} />
        </div>
        <div>
          <Tagline tagline={data.tagline} />
          <Genres genres={data.genres} />
        </div>
      </div>
    </div>
  );
};

export default TVShowDetails;
