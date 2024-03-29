import React, { cloneElement, forwardRef } from 'react';
import * as Dropdown from '@radix-ui/react-dropdown-menu';

import Separator from '../separator/Separator';

import './Dropdown.scss';

const DropdownMenu = forwardRef(
  (
    {
      className,
      defaultOpen,
      open,
      onOpenChange,
      isModal,
      triggerComponent,
      triggerOffset,
      children,
    },
    ref
  ) => {
    return (
      <Dropdown.Root
        defaultOpen={defaultOpen}
        open={open}
        onOpenChange={onOpenChange}
        modal={isModal}
      >
        <Dropdown.Trigger asChild>
          {cloneElement(triggerComponent)}
        </Dropdown.Trigger>
        <Dropdown.Portal container={document.getElementById('portals')}>
          <Dropdown.Content
            ref={ref}
            className={
              className ? `${className} dropdown-menu` : 'dropdown-menu'
            }
            sideOffset={triggerOffset}
          >
            {children}
          </Dropdown.Content>
        </Dropdown.Portal>
      </Dropdown.Root>
    );
  }
);

const DropdownItem = forwardRef(
  ({ className, disabled, onSelect, children }, ref) => {
    return (
      <>
        <Dropdown.Item
          ref={ref}
          className={
            className
              ? `${className} dropdown-menu__item`
              : 'dropdown-menu__item'
          }
          disabled={disabled}
          onSelect={onSelect}
        >
          {children}
        </Dropdown.Item>
        <Separator type='border' orientation='horizontal' />
      </>
    );
  }
);

export { DropdownMenu, DropdownItem };
