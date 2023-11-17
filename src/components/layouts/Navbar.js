import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import QuickSearch from '../../features/search/QuickSearch';

import Logo from '../../assets/logo.png';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo-container'>
        <Link to='/'>
          <img className='logo' src={Logo} alt='logo' />
        </Link>
      </div>
      <ul className='navigation-links'>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='movies'>Movies</NavLink>
        </li>
        <li>
          <NavLink to='tv-shows'>TV Shows</NavLink>
        </li>
        <li>
          <NavLink to='video-games'>Video Games</NavLink>
        </li>
        <li>
          <NavLink to='classical'>Classical Music</NavLink>
        </li>
      </ul>
      <QuickSearch searchKeys={['title', 'composer']} />
    </nav>
  );
};

export default Navbar;