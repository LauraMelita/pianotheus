import React from 'react';
import { HashLink } from 'react-router-hash-link';

import { useScrollToTop } from '../../../hooks/useScrollToTop';
import { useCreateCSSRootVariable } from '../../../hooks/useCreateCSSRootVariable';

import Svg from '../../UI/svg/Svg';
import Separator from '../../UI/separator/Separator';
import NavigationLinks from '../navbar/NavigationLinks';
import Contact from '../../../features/contact/Contact';

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
        <span>Quick Links</span>
        <NavigationLinks className='footer__links' />
      </div>
    );
  };

  const About = () => {
    return (
      <div className='footer__about'>
        <span>Pianotheus</span>
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

  const Downloads = () => {
    return (
      <div className='footer__downloads'>
        <span>Downloads</span>
        <ul>
          <li>
            <a
              href='https://synthesiagame.com/download'
              target='_blank'
              rel='noreferrer'
            >
              Synthesia
              <Svg icon='external-link' />
            </a>
          </li>
          <li>
            <a
              href='https://musescore.org/en/download'
              target='_blank'
              rel='noreferrer'
            >
              MuseScore
              <Svg icon='external-link' />
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
        <a
          className='icon-btn'
          href='https://github.com/LauraMelita'
          target='_blank'
          rel='noreferrer'
        >
          <Svg icon='github' />
        </a>
        <a
          className='icon-btn'
          href='https://www.linkedin.com/in/laura-melita-a30086104'
          target='_blank'
          rel='noreferrer'
        >
          <Svg icon='linkedin' />
        </a>
      </div>
    );
  };

  return (
    <footer className='footer' ref={elementRef}>
      <div className='footer__wrapper'>
        <div className='footer__top'>
          <QuickLinks />
          <About />
          <Downloads />
        </div>
        <Separator type='radial' orientation='horizontal' />
        <div className='footer__bottom'>
          <div>
            <img src={Logo} alt='logo' width={80} />
            <Copyright />
          </div>
          <Social />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
