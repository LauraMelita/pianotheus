import { createPortal } from 'react-dom';

const Portal = ({ children, portalId = 'portals' }) => {
  const portalContainer = document.getElementById(portalId);

  if (!portalContainer) {
    return null; // If the portal container does not exist, don't render anything
  }

  return createPortal(children, portalContainer);
};

export default Portal;
