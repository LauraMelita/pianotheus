import React from 'react';
import { Link } from 'react-router-dom';

import { useCreateRootCSSVariable } from '../../../hooks/useCreateRootCSSVariable';

import NavigationLinks from './NavigationLinks';
import QuickSearch from '../../../features/quickSearch/QuickSearch';
import ToggleThemeMode from '../../../features/themeMode/ToggleThemeMode';
import Sidebar from './sidebar/Sidebar';

import Logo from '../../../assets/images/logo.svg';
import './Navbar.scss';

const Navbar = () => {
  const elementRef = useCreateRootCSSVariable(
    'navbar-height',
    'offsetHeight',
    'px'
  );

  return (
    <nav className='navbar' ref={elementRef}>
      <div className='navbar__wrapper'>
        <div className='navbar__logo'>
          <Link to='/'>
            <img src={Logo} alt='logo' />
          </Link>
        </div>
        <NavigationLinks className='navbar__links' />
        <div className='navbar__actions'>
          <QuickSearch searchKeys={['title', 'composer']} />
          <ToggleThemeMode />
        </div>
        <Sidebar />
      </div>
    </nav>
  );
};

export default Navbar;
