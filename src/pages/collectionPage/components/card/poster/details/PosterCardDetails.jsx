import React from 'react';

import { useScoreStats } from '../../../../../../hooks/useScoreStats';

import Badge from '../../../../../../components/UI/badge/Badge';
import Svg from '../../../../../../components/UI/svg/Svg';
import Button from '../../../../../../components/UI/button/Button';
import Separator from '../../../../../../components/UI/separator/Separator';

import './PosterCardDetails.scss';

const PosterCardDetails = ({ className, composer, composerImg, scores }) => {
  const stats = useScoreStats(scores);

  return (
    <figcaption className={className}>
      <div className='composer'>
        <Badge
          image={composerImg}
          title={composer}
          width={30}
          height={30}
          borderRadius='50%'
        >
          <span>{composer}</span>
        </Badge>
      </div>

      <div className='stats'>
        <div>Scores</div>
        <Separator type='border' orientation='horizontal' />
        <ul>
          <li>
            <Svg icon='midi-text' />
            <span>{stats.midi}</span>
          </li>
          <Separator type='border' orientation='vertical' />
          <li>
            <Svg icon='pdf-text' />
            <span>{stats.sheetMusic}</span>
          </li>
          <Separator type='border' orientation='vertical' />
          <li>
            <Svg icon='youtube' />
            <span>{stats.tutorials}</span>
          </li>
        </ul>
      </div>
      <Button variant='primary'>View Scores</Button>
    </figcaption>
  );
};

export default PosterCardDetails;
