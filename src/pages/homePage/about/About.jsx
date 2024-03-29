import React from 'react';

import { BackgroundImage } from '../../../components/UI/image/BackgroundImage';
import Button from '../../../components/UI/button/Button';

import AboutImg from '../../../assets/images/about.png';
import './About.scss';

const About = () => {
  return (
    <div className='about'>
      <div className='about__content'>
        <h2 className='header gradient-text'>About Pianotheus</h2>
        <div>
          <p>
            Welcome to Pianotheus, your go-to platform for unlocking the world
            of piano melodies without the need for traditional sheet music. As
            the founder and curator of this platform, let me share a bit about
            the inspiration behind Pianotheus.
          </p>
          <br />
          <p>
            Pianotheus is born out of my passion for both web development and
            the piano. Being a self-taught pianist myself, I understand the
            challenges faced by those who aspire to learn the piano later in
            life. Pianotheus is more than just a collection of MIDI files; it's
            a testament to the belief that music knows no age limit. Here,
            you'll find a wealth of resources to aid your piano learning
            journey, even if you've never read a sheet of music before.
          </p>
          <br />
          <p>
            Join me on this musical adventure, immerse yourself in timeless
            compositions, and let's bring the piano to life, one key at a time.
          </p>
        </div>
        <Button variant='primary'>Get Started</Button>
      </div>
      {/* <BackgroundImage className='about__image' url={AboutImg} /> */}
    </div>
  );
};

export default About;
