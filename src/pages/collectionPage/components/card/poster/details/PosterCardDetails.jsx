import React from 'react';

import { useScoreStats } from '../../../../../../hooks/useScoreStats';

import Badge from '../../../../../../components/UI/badge/Badge';
import Svg from '../../../../../../components/UI/svg/Svg';
import Separator from '../../../../../../components/UI/separator/Separator';

import './PosterCardDetails.scss';

const PosterCardDetails = ({ className, composer, composerImg, scores }) => {
  const stats = useScoreStats(scores);

  const files = [
    { count: stats.midi, icon: 'midi-text' },
    { count: stats.sheetMusic, icon: 'pdf-text' },
    { count: stats.tutorials, icon: 'youtube' },
  ];

  const availableFiles = files.filter((file) => file.count > 0);

  return (
    <figcaption className={className}>
      <Badge
        image={composerImg}
        title={composer}
        width={30}
        height={30}
        borderRadius='50%'
      />
      <div>
        <span>{composer}</span>
        <div className='stats'>
          <div className='stats__total-tracks'>
            Tracks <span>{stats.total}</span>
          </div>
          <div className='stats__available-files'>
            {availableFiles.map((fileType, index) => (
              <React.Fragment key={index}>
                <Svg icon={fileType.icon} />
                {index < availableFiles.length - 1 && (
                  <Separator type='border' orientation='vertical' />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </figcaption>
  );
};

export default PosterCardDetails;
