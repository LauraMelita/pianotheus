import React from 'react';

import { useResponsive } from '../../../../../hooks/useResponsive';

import Description from '../../../components/description/Description';
import Metadata from '../../../components/metadata/Metadata';
import Gallery from '../../../components/gallery/Gallery';
import Esrb from '../../../components/esrb/Esrb';

const VideoGameOverview = ({ data }) => {
  const { isTablet, isMobile } = useResponsive();

  return (
    <div className='overview'>
      {(isTablet || isMobile) && (
        <Description text={data.description} maxWords={30} header='Summary' />
      )}
      <Metadata platforms={data.platforms} website={data.website} />
      <Gallery
        title={data.title}
        trailer={data.trailer}
        screenshots={data.screenshots}
      />
      {isMobile && (
        <Esrb
          rating={data.esrb.rating}
          descriptor={data.esrb.descriptor}
          icon={data.esrb.icon}
        />
      )}
    </div>
  );
};

export default VideoGameOverview;
