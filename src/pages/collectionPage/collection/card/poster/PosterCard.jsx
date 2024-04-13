import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { useAnimations } from '../../../../../hooks/useAnimations';

import Image from '../../../../../components/UI/image/Image';
import Svg from '../../../../../components/UI/svg/Svg';
import Separator from '../../../../../components/UI/separator/Separator';
import Badge from '../../../../../components/UI/badge/Badge';

import './PosterCard.scss';

const PosterCard = ({
  cardIndex,
  path,
  title,
  year,
  poster,
  composer,
  composerImg,
  scores,
}) => {
  const { staggerCards } = useAnimations();

  const AvailableScores = () => {
    return (
      <ul className='poster-card__scores'>
        {scores.map((score, index) => (
          <li key={index}>
            <Svg icon='midi-text' />
            <span>{score.title}</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <motion.li
      className='poster-card'
      variants={staggerCards}
      custom={cardIndex}
      initial='hidden'
      animate='visible'
      viewport={{
        once: true,
      }}
    >
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
                borderRadius='50%'
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
    </motion.li>
  );
};

export default PosterCard;
