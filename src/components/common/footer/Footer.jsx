import React from 'react';
import { HashLink } from 'react-router-hash-link';

import { useScrollToTop } from '../../../hooks/useScrollToTop';
import { useCreateCSSRootVariable } from '../../../hooks/useCreateCSSRootVariable';

import Button from '../../UI/button/Button';
import Svg from '../../UI/svg/Svg';
import Separator from '../../UI/separator/Separator';
import NavigationLinks from '../navbar/NavigationLinks';
import Contact from '../../../features/contact/Contact';
import Image from '../../UI/image/Image';

import { currentYear } from '../../../utils/helpers';

import Logo from '../../../assets/images/logo.svg';
import './Footer.scss';

const Footer = () => {
  const { handlePageScroll } = useScrollToTop();
  const elementRef = useCreateCSSRootVariable(
    'footer-height',
    'offsetHeight',
    'px'
  );

  const QuickLinks = () => {
    return (
      <div className='footer__quick-links'>
        <span className='footer__title'>Quick Links</span>
        <NavigationLinks
          className='footer__links'
          shouldRenderIcons={false}
          onClick={(e) => handlePageScroll(e)}
        />
      </div>
    );
  };

  const About = () => {
    return (
      <div className='footer__about'>
        <span className='footer__title'>Pianotheus</span>
        <ul>
          <li>
            <HashLink to='/#about' onClick={(e) => handlePageScroll(e)}>
              About
            </HashLink>
          </li>
          <Contact btnText='Contact' />
        </ul>
      </div>
    );
  };

  const APIs = () => {
    return (
      <div className='footer__apis'>
        <span className='footer__title'>APIs</span>
        <ul>
          <li>
            <a href='https://www.omdbapi.com/' target='_blank' rel='noreferrer'>
              OMDb
              <Svg icon='external-link' variant='small' />
            </a>
          </li>
          <li>
            <a href='https://rawg.io/apidocs' target='_blank' rel='noreferrer'>
              Rawg
              <Svg icon='external-link' variant='small' />
            </a>
          </li>
        </ul>
      </div>
    );
  };

  const Downloads = () => {
    return (
      <div className='footer__downloads'>
        <span className='footer__title'>Downloads</span>
        <ul>
          <li>
            <a
              href='https://synthesiagame.com/download'
              target='_blank'
              rel='noreferrer'
            >
              Synthesia
              <Svg icon='external-link' variant='small' />
            </a>
          </li>
          <li>
            <a
              href='https://musescore.org/en/download'
              target='_blank'
              rel='noreferrer'
            >
              MuseScore
              <Svg icon='external-link' variant='small' />
            </a>
          </li>
        </ul>
      </div>
    );
  };

  const Copyright = () => {
    return (
      <div className='copyright'>
        <span>© {currentYear} Pianotheus</span>
      </div>
    );
  };

  const Social = () => {
    return (
      <div className='footer__social'>
        <Button
          variant='icon'
          href='https://github.com/LauraMelita'
          target='_blank'
          rel='noreferrer'
        >
          <Svg icon='github' />
        </Button>

        <Button
          variant='icon'
          href='https://www.linkedin.com/in/laura-melita-a30086104'
          target='_blank'
          rel='noreferrer'
        >
          <Svg icon='linkedin' />
        </Button>
      </div>
    );
  };

  return (
    <footer className='footer' ref={elementRef}>
      <div className='footer__wrapper'>
        <div className='footer__top'>
          <QuickLinks />
          <About />
          <APIs />
          <Downloads />
        </div>
        <Separator type='radial' orientation='horizontal' />
        <div className='footer__bottom'>
          <div>
            <Image src={Logo} alt='Pianotheus logo' width={80} />
            <Copyright />
          </div>
          <Social />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
