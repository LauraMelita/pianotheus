import React from 'react';
import ReactDOM from 'react-dom';
import * as Separator from '@radix-ui/react-separator';

import Icons from '../../assets/icons.svg';
import './Modal.scss';

const portalElement = document.getElementById('overlays');

const Backdrop = ({ closeModal }) => {
  return <div className='backdrop' onClick={closeModal} />;
};

const Modal = ({
  isOpen,
  title,
  btnConfirm,
  btnClose,
  children,
  closeModal,
}) => {
  return (
    <>
      {isOpen
        ? ReactDOM.createPortal(
            <Backdrop closeModal={closeModal} />,
            portalElement
          )
        : null}
      {isOpen
        ? ReactDOM.createPortal(
            <div className='modal'>
              <div className='modal-header'>
                <h1>{title}</h1>
                <svg onClick={closeModal}>
                  <use href={`${Icons}#icon-close`} />
                </svg>
              </div>
              <Separator.Root
                className='separator'
                orientation='horizontal'
                decorative
              />
              <div className='modal-content'>{children}</div>
              <Separator.Root
                className='separator'
                orientation='horizontal'
                decorative
              />
              <div className='modal-actions'>
                <button className='cancel' onClick={closeModal}>
                  {btnClose}
                </button>
                {/* <button type='submit' className='confirm' onClick={onConfirm}>
                  {btnConfirm}
                </button> */}
              </div>
            </div>,
            portalElement
          )
        : null}
    </>
  );
};

export default Modal;
