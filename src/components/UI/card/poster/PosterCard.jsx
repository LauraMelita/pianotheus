import React from 'react';
import { Link } from 'react-router-dom';

import Image from '../../image/Image';
import Svg from '../../svg/Svg';
import Separator from '../../separator/Separator';
import Badge from '../../badge/Badge';

import './PosterCard.scss';

const PosterCard = ({
  path,
  title,
  year,
  poster,
  composer,
  composerImg,
  scores,
}) => {
  const AvailableScores = () => {
    return (
      <ul className='poster-card__scores'>
        {scores.map((score, index) => (
          <li key={index}>
            <Svg icon='midi-text' />
            <span>{score.score}</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className='poster-card'>
      <Link to={path}>
        <figure className='poster-card__poster'>
          <Image src={poster} alt={`${title} poster`} />
          <figcaption className='poster-card__inner'>
            <div className='poster-card__composer'>
              <Badge
                image={composerImg}
                title={composer}
                width={30}
                height={30}
              >
                <span>{composer}</span>
              </Badge>
            </div>
            <Separator type='radial' orientation='horizontal' />
            <AvailableScores />
          </figcaption>
        </figure>
      </Link>
      <div className='poster-card__title'>
        <span>{title}</span>
        <span>{year}</span>
      </div>
    </div>
  );
};

export default PosterCard;
