import React from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children, portalId = 'portals' }) => {
  return <>{createPortal(children, document.getElementById(portalId))}</>;
};

export default Portal;
