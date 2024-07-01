import React, { forwardRef } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import Button from '../button/Button';
import Svg from '../svg/Svg';

import { GLOBAL_STYLES } from '../../../utils/constants';

import './Modal.scss';

const Modal = forwardRef(
  (
    {
      className,
      open,
      onOpenChange,
      triggerComponent,
      isBackgroundOverlay = false,
      closeBtnVariant = 'icon',
      children,
    },
    ref
  ) => {
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
          <Dialog.Content
            ref={ref}
            className={className ? `${className} modal` : 'modal'}
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

export default Modal;
