import React from 'react';
import { Link } from 'react-router-dom';

import { useDocumentTitle } from '@mantine/hooks';

import Quote from '../../pages/home/quote/Quote';
import Contact from '../../features/contact/Contact';

import PageNotFoundImg from '../../assets/images/404.jpg';
import './PageNotFound.scss';

const PageNotFound = () => {
  useDocumentTitle('Page Not Found');

  return (
    <main className='page-not-found'>
      <div className='page-not-found__container'>
        <div className='page-not-found__left'>
          <div>
            <img src={PageNotFoundImg} alt='404' />
          </div>
          <Quote
            text={`Lord! It's a miracle! Webpage up and vanished like a fart in the
            wind!`}
            author='Warden Norton'
            source='The Shawshank Redemption (1994)'
          />
        </div>
        <div className='page-not-found__right'>
          <h3>404.</h3>
          <h4>This page doesn't exist.</h4>
          <p>
            If the problem persists, please let me know via the &nbsp;
            <Contact btnText='contact form' />.
          </p>
          <button>
            <Link to='/'>Return Home</Link>
          </button>
        </div>
      </div>
    </main>
  );
};

export default PageNotFound;
