import React from 'react';

import {
  DropdownMenu,
  DropdownItem,
} from '../../components/UI/dropdown/Dropdown';
import Svg from '../../components/UI/svg/Svg';

import './InfoPopup.scss';

const InfoPopup = ({ className, title, children }) => {
  return (
    <DropdownMenu
      isModal={false}
      triggerComponent={
        <div className={`${className} info-popup `}>
          <span>{title}</span>
          <Svg icon='info' />
        </div>
      }
      triggerOffset={5}
      align='start'
    >
      <DropdownItem className='info-popup__content' disabled>
        {children}
      </DropdownItem>
    </DropdownMenu>
  );
};

export default InfoPopup;
