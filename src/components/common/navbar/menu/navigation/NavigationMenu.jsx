import React from 'react';

import { useMobileMenuContext } from '../../../../../context/MobileMenuContext';
import { useAnimations } from '../../../../../hooks/useAnimations';

import MobileMenu from '../../../../../features/mobile/menu/MobileMenu';
import AnimatedMenuButton from '../../../../UI/animation/menuButton/AnimatedMenuButton';
import NavigationLinks from '../../../../../features/navigation/NavigationLinks';

import './NavigationMenu.scss';

const NavigationMenu = () => {
  //prettier-ignore
  const { menus: { slider: { open, toggle, close } } } = useMobileMenuContext();
  const { slideRight } = useAnimations();

  return (
    <MobileMenu
      className='navigation-menu'
      closeOnOutsideClick={true}
      showMenu={open}
      closeMenu={close}
      componentTrigger={<AnimatedMenuButton onClick={toggle} />}
      menuAnimation={slideRight}
      initial={{ width: 0 }}
      exit={{ width: 0 }}
    >
      <NavigationLinks
        className='navigation-menu__links'
        shouldRenderIcons={true}
        onClick={close}
      />
    </MobileMenu>
  );
};

export default NavigationMenu;
