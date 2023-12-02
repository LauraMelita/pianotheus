import React from 'react';
import { HashLink } from 'react-router-hash-link';

import { useCreateRootCSSVariable } from '../../../hooks/useCreateRootCSSVariable';

import NavigationLinks from '../navbar/NavigationLinks';
import Svg from '../../UI/svg/Svg';
import Contact from '../../../features/contact/Contact';

import { currentYear } from '../../../utils/helpers';

import './Footer.scss';

const Footer = () => {
  const elementRef = useCreateRootCSSVariable(
    'footer-height',
    'offsetHeight',
    'px'
  );

  return (
    <footer className='footer' ref={elementRef}>
      <div className='footer__wrapper'>
        <div className='footer__top'>
          <div className='footer__quick-links'>
            <span>Quick Links</span>
            <NavigationLinks className='footer__links' />
          </div>
          <div className='footer__about'>
            <span>Pianotheus</span>
            <ul>
              <li>
                <HashLink to='/#about'>About</HashLink>
              </li>
              <Contact />
            </ul>
          </div>
          <div className='footer__social'>
            <span>Get in Touch</span>
            <ul>
              <li className='icon-btn'>
                <a
                  href='https://github.com/LauraMelita'
                  target='_blank'
                  rel='noreferrer'
                >
                  <Svg icon='github' />
                </a>
              </li>
              <li className='icon-btn'>
                <a
                  href='https://www.linkedin.com/in/laura-melita-a30086104'
                  target='_blank'
                  rel='noreferrer'
                >
                  <Svg icon='linkedin' />
                </a>
              </li>
            </ul>
          </div>
          <div className='footer__download'>
            <span>Download</span>
            <ul>
              <li>
                <a
                  href='https://synthesiagame.com/download'
                  target='_blank'
                  rel='noreferrer'
                >
                  Synthesia
                  <Svg className='external-link' icon='external-link' />
                </a>
              </li>
              <li>
                <a
                  href='https://musescore.org/en/download'
                  target='_blank'
                  rel='noreferrer'
                >
                  MuseScore
                  <Svg className='external-link' icon='external-link' />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='footer__bottom'>
          <div className='copyright'>
            <span>© {currentYear} by Pianotheus</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
