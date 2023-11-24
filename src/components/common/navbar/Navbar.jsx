import { Link } from 'react-router-dom';

import Sidebar from './sidebar/Sidebar';
import NavigationLinks from './NavigationLinks';
import QuickSearch from '../../../features/quickSearch/QuickSearch';
import ToggleThemeMode from '../../../features/themeMode/ToggleThemeMode';

import Logo from '../../../assets/logo.svg';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className='navbar'>
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
