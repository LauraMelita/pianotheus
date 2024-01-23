import React from 'react';
import { motion } from 'framer-motion';

import Image from '../../../components/UI/image/Image';
import Separator from '../../../components/UI/separator/Separator';

import AboutImg from '../../../assets/images/about.png';
import './About.scss';

const About = () => {
  return (
    <div className='about'>
      <h1 className='gradient-text'>About</h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1, scale: 1.5 }}
      >
        <Image src={AboutImg} alt='about' />
        <Separator type='radial' orientation='horizontal' />
      </motion.div>
    </div>
  );
};

export default About;
