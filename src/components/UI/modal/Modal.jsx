import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import Button from '../button/Button';
import Svg from '../svg/Svg';

import './Modal.scss';

const Modal = ({
  open,
  toggleModal,
  triggerBtnClassName,
  triggerBtnText,
  title,
  description,
  children,
}) => {
  return (
    <Dialog.Root modal={true} open={open} onOpenChange={toggleModal}>
      <Dialog.Trigger asChild>
        <Button className={triggerBtnClassName}>{triggerBtnText}</Button>
      </Dialog.Trigger>
      <Dialog.Portal container={document.getElementById('portals')}>
        <Dialog.Overlay className='overlay' />
        <Dialog.Content className='modal'>
          <Dialog.Title className='modal__title'>{title}</Dialog.Title>
          <Dialog.Description className='modal__description'>
            {description}
          </Dialog.Description>
          {children}
          <Dialog.Close asChild>
            <Button
              className='modal__close-btn'
              variant='icon'
              aria-label='close'
            >
              <Svg icon='close' />
            </Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
