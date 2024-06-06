import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { useAnimations } from '../../../../../hooks/useAnimations';

import Image from '../../../../../components/UI/image/Image';
import PosterCardDetails from './details/PosterCardDetails';

import './PosterCard.scss';

const Title = ({ className, title, year }) => {
  return (
    <div className={className}>
      <span>{title}</span>
      <span>{year}</span>
    </div>
  );
};

const Card = ({ className, path, poster, title, children }) => {
  return (
    <figure className={className}>
      <Link to={path}>
        <Image src={poster} alt={`${title} poster`} />
        {children}
      </Link>
    </figure>
  );
};

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

  return (
    <motion.li
      className='poster'
      variants={staggerCards}
      custom={cardIndex}
      initial='hidden'
      animate='visible'
    >
      <Card className='poster__card' path={path} poster={poster} title={title}>
        <PosterCardDetails
          className='poster_card-inner'
          composer={composer}
          composerImg={composerImg}
          scores={scores}
        />
      </Card>
      <Title className='poster__title' title={title} year={year} />
    </motion.li>
  );
};

export default PosterCard;
