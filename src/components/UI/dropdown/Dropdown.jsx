import React, { cloneElement, forwardRef } from 'react';
import * as Dropdown from '@radix-ui/react-dropdown-menu';
import * as Dialog from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import classNames from 'classnames';

import Separator from '../separator/Separator';
import Button from '../button/Button';
import Svg from '../svg/Svg';

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
      align, // Options: 'start' | 'end' | 'center'
      alignOffset,
      children,
      ...props
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
            className={classNames(className, 'dropdown-menu')}
            sideOffset={triggerOffset}
            align={align}
            alignOffset={alignOffset}
            {...props}
          >
            {children}
          </Dropdown.Content>
        </Dropdown.Portal>
      </Dropdown.Root>
    );
  }
);

const DropdownItem = forwardRef(
  ({ className, disabled, onSelect, children, ...props }, ref) => {
    return (
      <>
        <Dropdown.Item
          ref={ref}
          className={classNames(className, 'dropdown-menu__item')}
          disabled={disabled}
          onSelect={onSelect}
          {...props}
        >
          {children}
        </Dropdown.Item>
        <Separator type='border' orientation='horizontal' />
      </>
    );
  }
);

const DropdownModalItem = forwardRef(
  (
    {
      className,
      onOpenChange,
      modalTrigger,
      onSelect,
      closeBtnVariant = 'ghost',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Dialog.Root onOpenChange={onOpenChange}>
        <Dialog.Trigger asChild>
          <Dropdown.Item
            ref={ref}
            className='dropdown-menu__item'
            onSelect={(e) => {
              e.preventDefault();
              onSelect && onSelect();
            }}
            {...props}
          >
            {modalTrigger}
          </Dropdown.Item>
        </Dialog.Trigger>

        <Dialog.Portal container={document.getElementById('portals')}>
          <Dialog.Overlay className='overlay' />
          <Dialog.Content
            className={classNames(className, 'modal')}
            aria-describedby={undefined}
          >
            <div className='modal__content'>
              <VisuallyHidden>
                <Dialog.Title />
              </VisuallyHidden>
              <Dialog.Close asChild>
                <Button
                  className='modal__close-btn'
                  variant={closeBtnVariant}
                  aria-label='close'
                >
                  <Svg icon='close' />
                </Button>
              </Dialog.Close>
              {children}
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    );
  }
);

export { DropdownMenu, DropdownItem, DropdownModalItem };
