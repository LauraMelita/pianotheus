import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import Icons from '../../assets/icons.svg';
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
        <button className={triggerBtnClassName}>{triggerBtnText}</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='overlay' />
        <Dialog.Content className='modal'>
          <Dialog.Title className='modal-title'>{title}</Dialog.Title>
          <Dialog.Description className='modal-description'>
            {description}
          </Dialog.Description>
          {children}

          <Dialog.Close asChild>
            <button className='close-btn' aria-label='Close'>
              <svg className='icon-close'>
                <use href={`${Icons}#icon-close`} />
              </svg>
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
