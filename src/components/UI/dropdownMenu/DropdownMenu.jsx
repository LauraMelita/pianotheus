import React, { cloneElement } from 'react';
import * as Dropdown from '@radix-ui/react-dropdown-menu';

import './DropdownMenu.scss';

const DropdownMenu = ({ children, trigger, triggerOffset }) => {
  return (
    <Dropdown.Root>
      <Dropdown.Trigger asChild>{cloneElement(trigger)}</Dropdown.Trigger>
      <Dropdown.Portal container={document.getElementById('portals')}>
        <Dropdown.Content
          className='dropdown-menu__content'
          sideOffset={triggerOffset}
        >
          <Dropdown.Item className='dropdown-menu__item'>
            {children}
          </Dropdown.Item>
        </Dropdown.Content>
      </Dropdown.Portal>
    </Dropdown.Root>
  );
};

export default DropdownMenu;
