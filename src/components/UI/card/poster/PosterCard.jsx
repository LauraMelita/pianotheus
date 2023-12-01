import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Svg from '../../svg/Svg';
import Badge from '../../badge/Badge';
import Separator from '../../separator/Separator';

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
      <Svg icon='radio' />
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
      <h4 className='gradient-text'>
        {title} ({year})
      </h4>
      <Badge image={composerImg} text={composer} height={150} width={150} />
      <Link to={path}>
        <figure>
          <img src={poster} alt={`${title} poster`} />
          <figcaption>
            <h3>Scores</h3>
            <Separator orientation='horizontal' />
            {scoresList}
          </figcaption>
        </figure>
      </Link>
    </motion.div>
  );
};

export default PosterCard;
