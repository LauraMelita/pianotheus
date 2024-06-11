import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { useUserContext } from '../../../context/AuthContext';
import { useStyles } from '../../../hooks/useStyles';
import { useResponsive } from '../../../hooks/useResponsive';

import Image from '../../UI/image/Image';
import Separator from '../../UI/separator/Separator';
import NavigationMenu from './menu/navigation/NavigationMenu';
import NavigationLinks from '../../../features/navigation/links/NavigationLinks';
import SearchMenu from './menu/search/SearchMenu';
import QuickSearch from '../../../features/quickSearch/QuickSearch';
import UserMenu from '../../../features/authentication/user/menu/UserMenu';
import LoginButton from '../../../features/authentication/button/LoginButton';

import PianotheusLogo from '../../../assets/images/logo.svg';
import './Navbar.scss';

const Navbar = () => {
  const { user } = useUserContext();
  const { navbarBackgroundColor } = useStyles();
  const { isMobile, isDesktop } = useResponsive();

  const Logo = () => (
    <Link to='/'>
      <Image src={PianotheusLogo} alt='pianotheus logo' />
    </Link>
  );

  const NavbarLinks = () => {
    if (isDesktop)
      return (
        <NavigationLinks className='navbar__links' shouldRenderIcons={false} />
      );
  };

  const NavbarActions = () => {
    return (
      <div className='navbar__actions'>
        {isMobile ? <SearchMenu /> : <QuickSearch />}
        <Separator type='border' orientation='vertical' />
        {user ? <UserMenu /> : <LoginButton />}
      </div>
    );
  };

  return (
    <motion.nav
      className='navbar'
      style={{ backgroundColor: navbarBackgroundColor }}
    >
      <div className='navbar__wrapper'>
        <div className='navbar__logo'>
          {!isDesktop && <NavigationMenu />}
          <Logo />
        </div>
        <NavbarLinks />
        <NavbarActions />
      </div>
    </motion.nav>
  );
};

export default Navbar;
