import React from 'react';
import { NavLink } from 'react-router-dom';

import Svg from '../../UI/svg/Svg';

import { siteConfig } from '../../../utils/config';

const NavigationLinks = ({ className, shouldRenderIcons, onClick }) => {
  return (
    <ul className={className}>
      {siteConfig.navLinks.map(({ path, navLink, icon }) => (
        <li key={navLink}>
          <NavLink to={path} onClick={onClick}>
            {shouldRenderIcons && <Svg icon={icon} />}
            {navLink}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavigationLinks;
