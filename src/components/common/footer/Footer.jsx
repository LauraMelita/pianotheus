import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import NavigationLinks from '../navbar/NavigationLinks';
import ContactForm from '../../../features/contact/ContactForm';

import Icons from '../../../assets/icons.svg';
import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className='wrapper'>
        <div className='footer-top'>
          <ul className='quick-links'>
            Quick Links
            <NavigationLinks />
          </ul>
          <ul className='about'>
            Pianotheus
            <Link to='/#about'>About</Link>
            <ContactForm />
          </ul>
          <ul className='social'>
            Get in Touch
            <div>
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
            </div>
          </ul>
          <ul className='download'>
            Download
            <li>
              <a
                href='https://synthesiagame.com/download'
                target='_blank'
                rel='noreferrer'
              >
                Synthesia
              </a>
            </li>
            <li>
              <a
                href='https://musescore.org/en/download'
                target='_blank'
                rel='noreferrer'
              >
                MuseScore
              </a>
            </li>
          </ul>
        </div>
        <div className='footer-bottom'>
          <div className='copyright'>
            <span>© {currentYear} by Pianotheus</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
