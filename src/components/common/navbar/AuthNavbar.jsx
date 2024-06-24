import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Image from '../../UI/image/Image';

import PianotheusLogo from '../../../assets/images/logo.svg';

const AuthNavbar = () => {
  return (
    <motion.nav
      className='navbar'
      style={{
        position: 'initial',
        borderBottom: '1px solid var(--navbar-border-color)',
      }}
    >
      <div className='navbar__wrapper'>
        <div className='navbar__logo'>
          <Link to='/'>
            <Image src={PianotheusLogo} alt='pianotheus logo' />
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default AuthNavbar;
