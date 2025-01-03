import React from 'react';

import { useResponsive } from '../../../../../hooks/useResponsive';

import Description from '../../../components/description/Description';
import Cast from '../../../components/cast/Cast';
import Metadata from '../../../components/metadata/Metadata';
import Gallery from '../../../components/gallery/Gallery';
import ProductionCompanies from '../../../components/productionCompanies/ProductionCompanies';

const MovieOverview = ({ data }) => {
  const { isTablet, isMobile } = useResponsive();

  return (
    <div className='overview'>
      {(isTablet || isMobile) && (
        <Description text={data.plot} maxWords={70} header='Plot' />
      )}
      <Cast actors={data.actors} />
      <Metadata
        country={data.country}
        languages={data.spokenLanguages}
        productionCompanies={data.productionCompanies}
        boxOffice={data.boxOffice}
        awards={data.awards}
        website={data.website}
      />
      <Gallery
        title={data.title}
        trailer={data.trailer}
        screenshots={data.screenshots}
      />
      <ProductionCompanies companies={data.productionCompanies} />
    </div>
  );
};

export default MovieOverview;
