import React, { useState } from 'react';
import { motion } from 'framer-motion';

import Image from '../../../../components/UI/image/Image';

import './Crew.scss';

const AVATAR_SIZE = 50;

const SingleCard = ({ data }) => {
  const { profileImage, name } = data[0];

  return (
    <li className='single'>
      <Image src={profileImage} alt={name} width={AVATAR_SIZE} />
      <span>{name}</span>
    </li>
  );
};

const OverlappingCards = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  const columnSize = data.length;

  return (
    <motion.ul
      className='overlapping'
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{
        gridTemplateColumns: `repeat(${columnSize}, ${AVATAR_SIZE / 2}px)`,
      }}
      whileHover={{
        gridTemplateColumns: `repeat(${columnSize}, ${AVATAR_SIZE * 2.7}px)`,
        transition: {
          ease: 'easeInOut',
          duration: 0.5,
          stiffness: 300,
          damping: 20,
        },
      }}
    >
      {data.map((item, index) => (
        <li key={index}>
          <Image src={item.profileImage} alt={item.name} width={AVATAR_SIZE} />
          {isHovered && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className='name'
            >
              {item.name}
            </motion.span>
          )}
        </li>
      ))}
    </motion.ul>
  );
};

const CrewCards = ({ data, role }) => {
  const singleItem = data.length === 1;
  const roleTitle = `${role}${singleItem ? '' : 's'}`;

  return (
    <div className='crew__cards'>
      <span className='role'>{roleTitle}</span>
      {singleItem ? (
        <SingleCard data={data} />
      ) : (
        <OverlappingCards data={data} />
      )}
    </div>
  );
};

const Crew = ({ directors, writers, creators }) => {
  if (creators)
    return (
      <div className='crew'>
        <CrewCards data={creators} role='Creator' />
      </div>
    );

  if (directors || writers) {
    return (
      <div className='crew'>
        <CrewCards data={directors} role='Director' />
        <CrewCards data={writers} role='Writer' />
      </div>
    );
  }
};

export default Crew;
