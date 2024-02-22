import React from 'react';
import { Link } from 'react-router-dom';

import { useResponsive } from '../../../hooks/useResponsive';
import { useUserContext } from '../../../context/AuthContext';
import { useCreateCSSRootVariable } from '../../../hooks/useCreateCSSRootVariable';

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
  const { isMobile, isDesktop } = useResponsive();
  const { user } = useUserContext();
  const elementRef = useCreateCSSRootVariable(
    'navbar-height',
    'offsetHeight',
    'px'
  );

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
    <nav className='navbar' ref={elementRef}>
      <div className='navbar__wrapper'>
        <div className='navbar__logo'>
          {!isDesktop && <NavigationMenu />}
          <Logo />
        </div>
        <NavbarLinks />
        <NavbarActions />
      </div>
    </nav>
  );
};

export default Navbar;
