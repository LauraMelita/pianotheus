import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import Button from '../button/Button';
import Svg from '../svg/Svg';

import { GLOBAL_STYLES } from '../../../utils/constants';

import './Modal.scss';

const ModalContent = ({ className, closeBtnVariant, children }) => {
  return (
    <Dialog.Content className={className ? `${className} modal` : 'modal'}>
      <div className='modal__content'>
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
  );
};

const Modal = ({
  className,
  open,
  onOpenChange,
  triggerComponent,
  isBackgroundOverlay = false,
  closeBtnVariant = 'icon',
  children,
}) => {
  return (
    <Dialog.Root modal open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>
        <div className='modal__trigger'>{triggerComponent}</div>
      </Dialog.Trigger>
      <Dialog.Portal container={document.getElementById('portals')}>
        <Dialog.Overlay
          className='overlay'
          style={{
            background: isBackgroundOverlay && GLOBAL_STYLES.BACKGROUND_COLOR,
          }}
        />
        <ModalContent
          className={className}
          closeBtnVariant={closeBtnVariant}
          children={children}
        />
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
