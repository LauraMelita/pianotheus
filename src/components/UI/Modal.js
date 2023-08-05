import React from 'react';
import ReactDOM from 'react-dom';

import './Modal.scss';

const portalElement = document.getElementById('overlays');

const Backdrop = (props) => {
  return <div className='backdrop' onClick={props.close} />;
};

const ModalOverlay = (props) => {
  return (
    <div className='modal'>
      <div className='Content'>{props.children}</div>
      <button onClick={props.close}>Close</button>
    </div>
  );
};

const Modal = ({ isOpen, close, children }) => {
  return (
    <>
      {isOpen
        ? ReactDOM.createPortal(<Backdrop close={close} />, portalElement)
        : null}
      {isOpen
        ? ReactDOM.createPortal(
            <ModalOverlay close={close}>{children}</ModalOverlay>,
            portalElement
          )
        : null}
    </>
  );
};

export default Modal;
