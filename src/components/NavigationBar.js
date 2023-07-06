import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import SearchBar from './../components/SearchBar';

// import Logo from './../assets/logo.svg';
import './../styles/components/NavigationBar.scss';

const NavigationBar = () => {
  return (
    <nav className='navbar'>
      <div className='logo-container'>
        {/* <Link to='/'>
          <img className='logo' src={Logo} alt='logo' />
        </Link> */}
      </div>
      <ul className='navigation-links'>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/movies/composers'>Movies</NavLink>
        </li>
        <li>
          <NavLink to='/tv-shows/composers'>TV Shows</NavLink>
        </li>
        <li>
          <NavLink to='/video-games/composers'>Video Games</NavLink>
        </li>
        <li>
          <NavLink to='/classical/composers'>Classical Music</NavLink>
        </li>
        <li>
          <NavLink to='/soul/composers'>Soul</NavLink>
        </li>
        <li>
          <NavLink to='/ragtime/composers'>Ragtime</NavLink>
        </li>
      </ul>
      <SearchBar />
    </nav>
  );
};

export default NavigationBar;
