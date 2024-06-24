import React from 'react';
import { HashLink } from 'react-router-hash-link';

import { useScrollToTop } from '../../../hooks/useScrollToTop';

import Svg from '../../UI/svg/Svg';
import Separator from '../../UI/separator/Separator';
import Social from '../../UI/social/Social';
import NavigationLinks from '../../../features/navigation/links/NavigationLinks';
import ContactModal from '../../../features/contact/ContactModal';
import Image from '../../UI/image/Image';

import { currentYear } from '../../../utils/helpers';

import Logo from '../../../assets/images/logo.svg';
import './Footer.scss';

const Footer = ({ withQuickLinks = true }) => {
  const { handlePageScroll } = useScrollToTop();

  const QuickLinks = () => {
    return (
      <div className='footer__quick-links'>
        <span className='footer__title'>Quick Links</span>
        <NavigationLinks
          className='footer__links'
          shouldRenderIcons={false}
          onClick={handlePageScroll}
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
            <HashLink smooth to='/#about'>
              About
            </HashLink>
          </li>
          <ContactModal btnText='Contact' />
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
            <a
              href='https://developer.themoviedb.org'
              target='_blank'
              rel='noreferrer'
            >
              TMDB
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

  const Contributions = () => {
    return (
      <div className='footer__contributions'>
        <span className='footer__title'>Contributions</span>
        <ul>
          <li>
            <a
              href='https://www.linkedin.com/in/lilit-voskerchyan-5229ba16b'
              target='_blank'
              rel='noreferrer'
            >
              Design Consulting
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

  const Disclaimer = () => {
    return (
      <span className='disclaimer'>
        Disclaimer | Music files are for showcasing development skills and are
        not owned or claimed by this site.
      </span>
    );
  };

  return (
    <footer className='footer'>
      <div className='footer__wrapper'>
        <div className='footer__top'>
          {withQuickLinks && <QuickLinks />}
          <About />
          <APIs />
          <Downloads />
          <Contributions />
        </div>
        <Separator type='radial' orientation='horizontal' />
        <div className='footer__bottom'>
          <div>
            <Image src={Logo} alt='Pianotheus logo' width={80} />
            <Copyright />
          </div>
          <Disclaimer />
          <Social />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
