import React from 'react';

import { useResponsive } from '../../../../../hooks/useResponsive';

import Poster from '../../../components/poster/Poster';
import Title from '../../../components/title/Title';
import PlatformIcons from '../../../components/platformIcons/PlatformIcons';
import Spec from '../../../components/spec/Spec';
import Description from '../../../components/description/Description';
import Rating from '../../../components/rating/Rating';
import Esrb from '../../../components/esrb/Esrb';
import Genres from '../../../components/genres/Genres';

const VideoGameDetails = ({ data }) => {
  const { isDesktop, isLaptop, isMobile } = useResponsive();

  const specItems = [data.developers[0], data.released, `${data.playtime} hrs`];

  return (
    <div className='details'>
      <Poster className='details__poster' image={data.poster} />
      <div className='details__content'>
        <div>
          <div className='details__header'>
            <Title title={data.title} year={data.year}>
              <PlatformIcons icons={data.mainPlatforms} />
            </Title>
            <Spec items={specItems} />
            {(isDesktop || isLaptop) && (
              <Description text={data.description} maxWords={70} />
            )}
          </div>
          <Rating source='Metacritic' value={data.rating} maxValue={5} />
        </div>
        <div style={{ justifyContent: 'space-between' }}>
          {!isMobile && (
            <Esrb
              rating={data.esrb.rating}
              descriptor={data.esrb.descriptor}
              icon={data.esrb.icon}
            />
          )}
          <Genres genres={data.genres} />
        </div>
      </div>
    </div>
  );
};

export default VideoGameDetails;
