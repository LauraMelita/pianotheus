import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import { useAnimations } from '../../../hooks/useAnimations';

import { siteConfig } from '../../../utils/config';

import Svg from '../../../components/UI/svg/Svg';

import './About.scss';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });
  const { reveal } = useAnimations();
  const aboutCards = siteConfig.home.about;

  return (
    <motion.div
      ref={ref}
      className='about'
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.h1 className='heading' variants={reveal}>
        About
      </motion.h1>
      <ul className='about__cards'>
        {aboutCards.map((card) => (
          <motion.li key={card.title} variants={reveal}>
            <div className='icon-bg'>
              <Svg icon={card.icon} />
            </div>
            <div>
              <h4>{card.title}</h4>
              <span>{card.subtitle}</span>
              <p>{card.content}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default About;
