import React from 'react';
import { Link } from 'react-router-dom';
import * as Separator from '@radix-ui/react-separator';
import { motion } from 'framer-motion';

import Badge from '../../badge/Badge';

import Icons from '../../../../assets/icons/icons.svg';
import './PosterCard.scss';

const PosterCard = ({
  title,
  year,
  poster,
  composer,
  composerImg,
  scores,
  path,
}) => {
  const scoresList = scores.map((score, index) => (
    <div className='score-list' key={index}>
      <svg>
        <use href={`${Icons}#icon-radio`} />
      </svg>
      <li>{score.score}</li>
    </div>
  ));

  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className='poster-card'
    >
      <h3>
        {title} ({year})
      </h3>
      <Badge image={composerImg} text={composer} height={150} width={150} />
      <Link to={path}>
        <figure>
          <img src={poster} alt={`${title} poster`} />
          <figcaption>
            <h3>Scores</h3>
            <Separator.Root
              className='separator'
              orientation='horizontal'
              decorative
            />
            {scoresList}
          </figcaption>
        </figure>
      </Link>
    </motion.div>
  );
};

export default PosterCard;
