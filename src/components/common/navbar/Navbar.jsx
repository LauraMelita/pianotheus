import React from 'react';
import { Link } from 'react-router-dom';

import { useScreenSize } from '../../../hooks/useScreenSize';
import { useSidebar } from '../../../hooks/useSidebar';
import { useCreateCSSRootVariable } from '../../../hooks/useCreateCSSRootVariable';

import Sidebar from './sidebar/Sidebar';
import NavigationLinks from './NavigationLinks';
import QuickSearch from '../../../features/quickSearch/QuickSearch';
import ToggleThemeMode from '../../../features/themeMode/ToggleThemeMode';
import Separator from '../../UI/separator/Separator';
import AuthBtn from '../../../features/authentication/authBtn/AuthBtn';

import PianotheusLogo from '../../../assets/images/logo.svg';
import './Navbar.scss';

const Navbar = () => {
  const { isMobile, isDesktop } = useScreenSize();
  const { closeSidebar } = useSidebar();
  const elementRef = useCreateCSSRootVariable(
    'navbar-height',
    'offsetHeight',
    'px'
  );

  const Logo = () => (
    <Link to='/'>
      <img src={PianotheusLogo} alt='logo' />
    </Link>
  );

  const renderSidebar = () => {
    if (!isDesktop)
      return (
        <Sidebar>
          {isMobile && <QuickSearch searchKeys={['title', 'composer']} />}
          <NavigationLinks
            className='sidebar__links'
            shouldRenderIcons={true}
            onClick={closeSidebar}
          />
          <Separator type='border' orientation='horizontal' />
          <ToggleThemeMode />
        </Sidebar>
      );
  };

  const renderNavigationLinks = () => {
    if (isDesktop)
      return (
        <NavigationLinks className='navbar__links' shouldRenderIcons={false} />
      );
  };

  const renderNavbarActions = () => {
    return (
      <>
        {!isMobile && <QuickSearch searchKeys={['title', 'composer']} />}
        {isDesktop && <ToggleThemeMode />}
        <Separator type='border' orientation='vertical' />
        <AuthBtn />
      </>
    );
  };

  return (
    <nav className='navbar' ref={elementRef}>
      <div className='navbar__wrapper'>
        <div className='navbar__logo'>
          {renderSidebar()}
          <Logo />
        </div>
        {renderNavigationLinks()}
        <div className='navbar__actions'>{renderNavbarActions()}</div>
      </div>
    </nav>
  );
};

export default Navbar;
