import React, { useContext } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import { ThemeContext } from '../../../context/ThemeContext';

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
  const { theme } = useContext(ThemeContext);

  return (
    <Dialog.Root modal={true} open={open} onOpenChange={toggleModal}>
      <Dialog.Trigger asChild>
        <button className={triggerBtnClassName}>{triggerBtnText}</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='overlay' data-theme={theme} />
        <Dialog.Content className='modal' data-theme={theme}>
          <Dialog.Title className='modal-title'>{title}</Dialog.Title>
          <Dialog.Description className='modal-description'>
            {description}
          </Dialog.Description>
          {children}
          <Dialog.Close asChild>
            <button className='close icon-btn' aria-label='close'>
              <Svg icon='close' />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
