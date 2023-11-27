import React from 'react';
import { HashLink } from 'react-router-hash-link';

import NavigationLinks from '../navbar/NavigationLinks';
import ContactForm from '../../../features/contact/ContactForm';

import { currentYear } from '../../../utils/helper';

import Icons from '../../../assets/icons/icons.svg';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
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
              <ContactForm />
            </ul>
          </div>
          <div className='footer__social'>
            <span>Get in Touch</span>
            <ul>
              <li className='github icon-btn'>
                <a
                  href='https://github.com/LauraMelita'
                  target='_blank'
                  rel='noreferrer'
                >
                  <svg>
                    <use href={`${Icons}#icon-github`} />
                  </svg>
                </a>
              </li>
              <li className='linkedin icon-btn'>
                <a
                  href='https://www.linkedin.com/in/laura-melita-a30086104'
                  target='_blank'
                  rel='noreferrer'
                >
                  <svg>
                    <use href={`${Icons}#icon-linkedin`} />
                  </svg>
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
                  <svg>
                    <use href={`${Icons}#icon-external-link`} />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href='https://musescore.org/en/download'
                  target='_blank'
                  rel='noreferrer'
                >
                  MuseScore
                  <svg>
                    <use href={`${Icons}#icon-external-link`} />
                  </svg>
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
