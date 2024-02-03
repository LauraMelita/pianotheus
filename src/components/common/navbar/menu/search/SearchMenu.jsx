import React from 'react';

import { useMobileMenuContext } from '../../../../../context/MobileMenuContext';
import { useAnimations } from '../../../../../hooks/useAnimations';

import Button from '../../../../UI/button/Button';
import Svg from '../../../../UI/svg/Svg';
import MobileMenu from '../../../../../features/mobile/menu/MobileMenu';
import QuickSearch from '../../../../../features/quickSearch/QuickSearch';

import './SearchMenu.scss';

const SearchMenu = () => {
  //prettier-ignore
  const { menus: { drawer: { open, toggle, close } } } = useMobileMenuContext();
  const { slideDown } = useAnimations();

  const MenuButton = ({ onClick }) => {
    return (
      <Button className='search-menu__btn' variant='icon' onClick={onClick}>
        <Svg icon='search' />
      </Button>
    );
  };

  return (
    <MobileMenu
      className='search-menu'
      showMenu={open}
      closeMenu={close}
      componentTrigger={<MenuButton onClick={toggle} />}
      menuAnimation={slideDown}
      initial={{ height: 0 }}
      exit={{ height: 0 }}
    >
      <QuickSearch className='mobile' />
    </MobileMenu>
  );
};

export default SearchMenu;
